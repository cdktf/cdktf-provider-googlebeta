# `googleGkeonpremBareMetalAdminCluster` Submodule <a name="`googleGkeonpremBareMetalAdminCluster` Submodule" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeonpremBareMetalAdminCluster <a name="GoogleGkeonpremBareMetalAdminCluster" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster google_gkeonprem_bare_metal_admin_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster(scope: Construct, id: string, config: GoogleGkeonpremBareMetalAdminClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig">GoogleGkeonpremBareMetalAdminClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig">GoogleGkeonpremBareMetalAdminClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putClusterOperations">putClusterOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putControlPlane">putControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putLoadBalancer">putLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putMaintenanceConfig">putMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putNodeAccessConfig">putNodeAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putNodeConfig">putNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putProxy">putProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putSecurityConfig">putSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetBareMetalVersion">resetBareMetalVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetClusterOperations">resetClusterOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetControlPlane">resetControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetLoadBalancer">resetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetMaintenanceConfig">resetMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetNodeAccessConfig">resetNodeAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetNodeConfig">resetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetProxy">resetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetSecurityConfig">resetSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClusterOperations` <a name="putClusterOperations" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putClusterOperations"></a>

```typescript
public putClusterOperations(value: GoogleGkeonpremBareMetalAdminClusterClusterOperations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putClusterOperations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperations">GoogleGkeonpremBareMetalAdminClusterClusterOperations</a>

---

##### `putControlPlane` <a name="putControlPlane" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putControlPlane"></a>

```typescript
public putControlPlane(value: GoogleGkeonpremBareMetalAdminClusterControlPlane): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putControlPlane.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlane">GoogleGkeonpremBareMetalAdminClusterControlPlane</a>

---

##### `putLoadBalancer` <a name="putLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putLoadBalancer"></a>

```typescript
public putLoadBalancer(value: GoogleGkeonpremBareMetalAdminClusterLoadBalancer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancer">GoogleGkeonpremBareMetalAdminClusterLoadBalancer</a>

---

##### `putMaintenanceConfig` <a name="putMaintenanceConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putMaintenanceConfig"></a>

```typescript
public putMaintenanceConfig(value: GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putMaintenanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig">GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: GoogleGkeonpremBareMetalAdminClusterNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfig">GoogleGkeonpremBareMetalAdminClusterNetworkConfig</a>

---

##### `putNodeAccessConfig` <a name="putNodeAccessConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putNodeAccessConfig"></a>

```typescript
public putNodeAccessConfig(value: GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putNodeAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig">GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig</a>

---

##### `putNodeConfig` <a name="putNodeConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putNodeConfig"></a>

```typescript
public putNodeConfig(value: GoogleGkeonpremBareMetalAdminClusterNodeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfig">GoogleGkeonpremBareMetalAdminClusterNodeConfig</a>

---

##### `putProxy` <a name="putProxy" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putProxy"></a>

```typescript
public putProxy(value: GoogleGkeonpremBareMetalAdminClusterProxy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxy">GoogleGkeonpremBareMetalAdminClusterProxy</a>

---

##### `putSecurityConfig` <a name="putSecurityConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putSecurityConfig"></a>

```typescript
public putSecurityConfig(value: GoogleGkeonpremBareMetalAdminClusterSecurityConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putSecurityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfig">GoogleGkeonpremBareMetalAdminClusterSecurityConfig</a>

---

##### `putStorage` <a name="putStorage" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putStorage"></a>

```typescript
public putStorage(value: GoogleGkeonpremBareMetalAdminClusterStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorage">GoogleGkeonpremBareMetalAdminClusterStorage</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleGkeonpremBareMetalAdminClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeouts">GoogleGkeonpremBareMetalAdminClusterTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetBareMetalVersion` <a name="resetBareMetalVersion" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetBareMetalVersion"></a>

```typescript
public resetBareMetalVersion(): void
```

##### `resetClusterOperations` <a name="resetClusterOperations" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetClusterOperations"></a>

```typescript
public resetClusterOperations(): void
```

##### `resetControlPlane` <a name="resetControlPlane" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetControlPlane"></a>

```typescript
public resetControlPlane(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoadBalancer` <a name="resetLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetLoadBalancer"></a>

```typescript
public resetLoadBalancer(): void
```

##### `resetMaintenanceConfig` <a name="resetMaintenanceConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetMaintenanceConfig"></a>

```typescript
public resetMaintenanceConfig(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetNodeAccessConfig` <a name="resetNodeAccessConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetNodeAccessConfig"></a>

```typescript
public resetNodeAccessConfig(): void
```

##### `resetNodeConfig` <a name="resetNodeConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetNodeConfig"></a>

```typescript
public resetNodeConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProxy` <a name="resetProxy" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetProxy"></a>

```typescript
public resetProxy(): void
```

##### `resetSecurityConfig` <a name="resetSecurityConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetSecurityConfig"></a>

```typescript
public resetSecurityConfig(): void
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetStorage"></a>

```typescript
public resetStorage(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeonpremBareMetalAdminCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.isConstruct"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.isTerraformElement"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.isTerraformResource"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.generateConfigForImport"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleGkeonpremBareMetalAdminCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGkeonpremBareMetalAdminCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGkeonpremBareMetalAdminCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeonpremBareMetalAdminCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.clusterOperations">clusterOperations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference">GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference">GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList">GoogleGkeonpremBareMetalAdminClusterFleetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference">GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.localName">localName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.maintenanceConfig">maintenanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.nodeAccessConfig">nodeAccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference">GoogleGkeonpremBareMetalAdminClusterProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.securityConfig">securityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList">GoogleGkeonpremBareMetalAdminClusterStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference">GoogleGkeonpremBareMetalAdminClusterStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference">GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.validationCheck">validationCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList">GoogleGkeonpremBareMetalAdminClusterValidationCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.bareMetalVersionInput">bareMetalVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.clusterOperationsInput">clusterOperationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperations">GoogleGkeonpremBareMetalAdminClusterClusterOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.controlPlaneInput">controlPlaneInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlane">GoogleGkeonpremBareMetalAdminClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.loadBalancerInput">loadBalancerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancer">GoogleGkeonpremBareMetalAdminClusterLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.maintenanceConfigInput">maintenanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig">GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfig">GoogleGkeonpremBareMetalAdminClusterNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.nodeAccessConfigInput">nodeAccessConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig">GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.nodeConfigInput">nodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfig">GoogleGkeonpremBareMetalAdminClusterNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.proxyInput">proxyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxy">GoogleGkeonpremBareMetalAdminClusterProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.securityConfigInput">securityConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfig">GoogleGkeonpremBareMetalAdminClusterSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.storageInput">storageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorage">GoogleGkeonpremBareMetalAdminClusterStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeouts">GoogleGkeonpremBareMetalAdminClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.bareMetalVersion">bareMetalVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterOperations`<sup>Required</sup> <a name="clusterOperations" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.clusterOperations"></a>

```typescript
public readonly clusterOperations: GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference">GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference</a>

---

##### `controlPlane`<sup>Required</sup> <a name="controlPlane" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.controlPlane"></a>

```typescript
public readonly controlPlane: GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference">GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.fleet"></a>

```typescript
public readonly fleet: GoogleGkeonpremBareMetalAdminClusterFleetList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList">GoogleGkeonpremBareMetalAdminClusterFleetList</a>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference">GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference</a>

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.localName"></a>

```typescript
public readonly localName: string;
```

- *Type:* string

---

##### `maintenanceConfig`<sup>Required</sup> <a name="maintenanceConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.maintenanceConfig"></a>

```typescript
public readonly maintenanceConfig: GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.networkConfig"></a>

```typescript
public readonly networkConfig: GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference</a>

---

##### `nodeAccessConfig`<sup>Required</sup> <a name="nodeAccessConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.nodeAccessConfig"></a>

```typescript
public readonly nodeAccessConfig: GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference</a>

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference</a>

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.proxy"></a>

```typescript
public readonly proxy: GoogleGkeonpremBareMetalAdminClusterProxyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference">GoogleGkeonpremBareMetalAdminClusterProxyOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `securityConfig`<sup>Required</sup> <a name="securityConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.securityConfig"></a>

```typescript
public readonly securityConfig: GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.status"></a>

```typescript
public readonly status: GoogleGkeonpremBareMetalAdminClusterStatusList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList">GoogleGkeonpremBareMetalAdminClusterStatusList</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.storage"></a>

```typescript
public readonly storage: GoogleGkeonpremBareMetalAdminClusterStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference">GoogleGkeonpremBareMetalAdminClusterStorageOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference">GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `validationCheck`<sup>Required</sup> <a name="validationCheck" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.validationCheck"></a>

```typescript
public readonly validationCheck: GoogleGkeonpremBareMetalAdminClusterValidationCheckList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList">GoogleGkeonpremBareMetalAdminClusterValidationCheckList</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bareMetalVersionInput`<sup>Optional</sup> <a name="bareMetalVersionInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.bareMetalVersionInput"></a>

```typescript
public readonly bareMetalVersionInput: string;
```

- *Type:* string

---

##### `clusterOperationsInput`<sup>Optional</sup> <a name="clusterOperationsInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.clusterOperationsInput"></a>

```typescript
public readonly clusterOperationsInput: GoogleGkeonpremBareMetalAdminClusterClusterOperations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperations">GoogleGkeonpremBareMetalAdminClusterClusterOperations</a>

---

##### `controlPlaneInput`<sup>Optional</sup> <a name="controlPlaneInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.controlPlaneInput"></a>

```typescript
public readonly controlPlaneInput: GoogleGkeonpremBareMetalAdminClusterControlPlane;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlane">GoogleGkeonpremBareMetalAdminClusterControlPlane</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.loadBalancerInput"></a>

```typescript
public readonly loadBalancerInput: GoogleGkeonpremBareMetalAdminClusterLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancer">GoogleGkeonpremBareMetalAdminClusterLoadBalancer</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maintenanceConfigInput`<sup>Optional</sup> <a name="maintenanceConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.maintenanceConfigInput"></a>

```typescript
public readonly maintenanceConfigInput: GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig">GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: GoogleGkeonpremBareMetalAdminClusterNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfig">GoogleGkeonpremBareMetalAdminClusterNetworkConfig</a>

---

##### `nodeAccessConfigInput`<sup>Optional</sup> <a name="nodeAccessConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.nodeAccessConfigInput"></a>

```typescript
public readonly nodeAccessConfigInput: GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig">GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig</a>

---

##### `nodeConfigInput`<sup>Optional</sup> <a name="nodeConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.nodeConfigInput"></a>

```typescript
public readonly nodeConfigInput: GoogleGkeonpremBareMetalAdminClusterNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfig">GoogleGkeonpremBareMetalAdminClusterNodeConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `proxyInput`<sup>Optional</sup> <a name="proxyInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.proxyInput"></a>

```typescript
public readonly proxyInput: GoogleGkeonpremBareMetalAdminClusterProxy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxy">GoogleGkeonpremBareMetalAdminClusterProxy</a>

---

##### `securityConfigInput`<sup>Optional</sup> <a name="securityConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.securityConfigInput"></a>

```typescript
public readonly securityConfigInput: GoogleGkeonpremBareMetalAdminClusterSecurityConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfig">GoogleGkeonpremBareMetalAdminClusterSecurityConfig</a>

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.storageInput"></a>

```typescript
public readonly storageInput: GoogleGkeonpremBareMetalAdminClusterStorage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorage">GoogleGkeonpremBareMetalAdminClusterStorage</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleGkeonpremBareMetalAdminClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeouts">GoogleGkeonpremBareMetalAdminClusterTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bareMetalVersion`<sup>Required</sup> <a name="bareMetalVersion" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.bareMetalVersion"></a>

```typescript
public readonly bareMetalVersion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeonpremBareMetalAdminClusterClusterOperations <a name="GoogleGkeonpremBareMetalAdminClusterClusterOperations" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperations.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterClusterOperations: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperations.property.enableApplicationLogs">enableApplicationLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics). |

---

##### `enableApplicationLogs`<sup>Optional</sup> <a name="enableApplicationLogs" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperations.property.enableApplicationLogs"></a>

```typescript
public readonly enableApplicationLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#enable_application_logs GoogleGkeonpremBareMetalAdminCluster#enable_application_logs}

---

### GoogleGkeonpremBareMetalAdminClusterConfig <a name="GoogleGkeonpremBareMetalAdminClusterConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterConfig: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.name">name</a></code> | <code>string</code> | The bare metal admin cluster name. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations on the Bare Metal Admin Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.bareMetalVersion">bareMetalVersion</a></code> | <code>string</code> | A human readable description of this Bare Metal Admin Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.clusterOperations">clusterOperations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperations">GoogleGkeonpremBareMetalAdminClusterClusterOperations</a></code> | cluster_operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlane">GoogleGkeonpremBareMetalAdminClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.description">description</a></code> | <code>string</code> | A human readable description of this Bare Metal Admin Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#id GoogleGkeonpremBareMetalAdminCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancer">GoogleGkeonpremBareMetalAdminClusterLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.maintenanceConfig">maintenanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig">GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig</a></code> | maintenance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfig">GoogleGkeonpremBareMetalAdminClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.nodeAccessConfig">nodeAccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig">GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig</a></code> | node_access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfig">GoogleGkeonpremBareMetalAdminClusterNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#project GoogleGkeonpremBareMetalAdminCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxy">GoogleGkeonpremBareMetalAdminClusterProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.securityConfig">securityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfig">GoogleGkeonpremBareMetalAdminClusterSecurityConfig</a></code> | security_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorage">GoogleGkeonpremBareMetalAdminClusterStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeouts">GoogleGkeonpremBareMetalAdminClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#location GoogleGkeonpremBareMetalAdminCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The bare metal admin cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#name GoogleGkeonpremBareMetalAdminCluster#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations on the Bare Metal Admin Cluster.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.


**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#annotations GoogleGkeonpremBareMetalAdminCluster#annotations}

---

##### `bareMetalVersion`<sup>Optional</sup> <a name="bareMetalVersion" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.bareMetalVersion"></a>

```typescript
public readonly bareMetalVersion: string;
```

- *Type:* string

A human readable description of this Bare Metal Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#bare_metal_version GoogleGkeonpremBareMetalAdminCluster#bare_metal_version}

---

##### `clusterOperations`<sup>Optional</sup> <a name="clusterOperations" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.clusterOperations"></a>

```typescript
public readonly clusterOperations: GoogleGkeonpremBareMetalAdminClusterClusterOperations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperations">GoogleGkeonpremBareMetalAdminClusterClusterOperations</a>

cluster_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#cluster_operations GoogleGkeonpremBareMetalAdminCluster#cluster_operations}

---

##### `controlPlane`<sup>Optional</sup> <a name="controlPlane" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.controlPlane"></a>

```typescript
public readonly controlPlane: GoogleGkeonpremBareMetalAdminClusterControlPlane;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlane">GoogleGkeonpremBareMetalAdminClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#control_plane GoogleGkeonpremBareMetalAdminCluster#control_plane}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human readable description of this Bare Metal Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#description GoogleGkeonpremBareMetalAdminCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#id GoogleGkeonpremBareMetalAdminCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: GoogleGkeonpremBareMetalAdminClusterLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancer">GoogleGkeonpremBareMetalAdminClusterLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#load_balancer GoogleGkeonpremBareMetalAdminCluster#load_balancer}

---

##### `maintenanceConfig`<sup>Optional</sup> <a name="maintenanceConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.maintenanceConfig"></a>

```typescript
public readonly maintenanceConfig: GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig">GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig</a>

maintenance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#maintenance_config GoogleGkeonpremBareMetalAdminCluster#maintenance_config}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: GoogleGkeonpremBareMetalAdminClusterNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfig">GoogleGkeonpremBareMetalAdminClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#network_config GoogleGkeonpremBareMetalAdminCluster#network_config}

---

##### `nodeAccessConfig`<sup>Optional</sup> <a name="nodeAccessConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.nodeAccessConfig"></a>

```typescript
public readonly nodeAccessConfig: GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig">GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig</a>

node_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#node_access_config GoogleGkeonpremBareMetalAdminCluster#node_access_config}

---

##### `nodeConfig`<sup>Optional</sup> <a name="nodeConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: GoogleGkeonpremBareMetalAdminClusterNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfig">GoogleGkeonpremBareMetalAdminClusterNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#node_config GoogleGkeonpremBareMetalAdminCluster#node_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#project GoogleGkeonpremBareMetalAdminCluster#project}.

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.proxy"></a>

```typescript
public readonly proxy: GoogleGkeonpremBareMetalAdminClusterProxy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxy">GoogleGkeonpremBareMetalAdminClusterProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#proxy GoogleGkeonpremBareMetalAdminCluster#proxy}

---

##### `securityConfig`<sup>Optional</sup> <a name="securityConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.securityConfig"></a>

```typescript
public readonly securityConfig: GoogleGkeonpremBareMetalAdminClusterSecurityConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfig">GoogleGkeonpremBareMetalAdminClusterSecurityConfig</a>

security_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#security_config GoogleGkeonpremBareMetalAdminCluster#security_config}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.storage"></a>

```typescript
public readonly storage: GoogleGkeonpremBareMetalAdminClusterStorage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorage">GoogleGkeonpremBareMetalAdminClusterStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#storage GoogleGkeonpremBareMetalAdminCluster#storage}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGkeonpremBareMetalAdminClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeouts">GoogleGkeonpremBareMetalAdminClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#timeouts GoogleGkeonpremBareMetalAdminCluster#timeouts}

---

### GoogleGkeonpremBareMetalAdminClusterControlPlane <a name="GoogleGkeonpremBareMetalAdminClusterControlPlane" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlane.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterControlPlane: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlane = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlane.property.controlPlaneNodePoolConfig">controlPlaneNodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a></code> | control_plane_node_pool_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlane.property.apiServerArgs">apiServerArgs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs">GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs</a>[]</code> | api_server_args block. |

---

##### `controlPlaneNodePoolConfig`<sup>Required</sup> <a name="controlPlaneNodePoolConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlane.property.controlPlaneNodePoolConfig"></a>

```typescript
public readonly controlPlaneNodePoolConfig: GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a>

control_plane_node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#control_plane_node_pool_config GoogleGkeonpremBareMetalAdminCluster#control_plane_node_pool_config}

---

##### `apiServerArgs`<sup>Optional</sup> <a name="apiServerArgs" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlane.property.apiServerArgs"></a>

```typescript
public readonly apiServerArgs: IResolvable | GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs">GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs</a>[]

api_server_args block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#api_server_args GoogleGkeonpremBareMetalAdminCluster#api_server_args}

---

### GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs <a name="GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs.property.argument">argument</a></code> | <code>string</code> | The argument name as it appears on the API Server command line please make sure to remove the leading dashes. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs.property.value">value</a></code> | <code>string</code> | The value of the arg as it will be passed to the API Server command line. |

---

##### `argument`<sup>Required</sup> <a name="argument" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs.property.argument"></a>

```typescript
public readonly argument: string;
```

- *Type:* string

The argument name as it appears on the API Server command line please make sure to remove the leading dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#argument GoogleGkeonpremBareMetalAdminCluster#argument}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the arg as it will be passed to the API Server command line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#value GoogleGkeonpremBareMetalAdminCluster#value}

---

### GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig <a name="GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig.property.nodePoolConfig">nodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a></code> | node_pool_config block. |

---

##### `nodePoolConfig`<sup>Required</sup> <a name="nodePoolConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig.property.nodePoolConfig"></a>

```typescript
public readonly nodePoolConfig: GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a>

node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#node_pool_config GoogleGkeonpremBareMetalAdminCluster#node_pool_config}

---

### GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig <a name="GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.nodeConfigs">nodeConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs</a>[]</code> | node_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | Specifies the nodes operating system (default: LINUX). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.taints">taints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints</a>[]</code> | taints block. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s)
that Kubernetes may apply to the node. In case of conflict in
label keys, the applied set may differ depending on the Kubernetes
version -- it's best to assume the behavior is undefined and
conflicts should be avoided. For more information, including usage
and the valid values, see:
  - http://kubernetes.io/v1.1/docs/user-guide/labels.html
An object containing a list of "key": value pairs.
For example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#labels GoogleGkeonpremBareMetalAdminCluster#labels}

---

##### `nodeConfigs`<sup>Optional</sup> <a name="nodeConfigs" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.nodeConfigs"></a>

```typescript
public readonly nodeConfigs: IResolvable | GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs</a>[]

node_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#node_configs GoogleGkeonpremBareMetalAdminCluster#node_configs}

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

Specifies the nodes operating system (default: LINUX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#operating_system GoogleGkeonpremBareMetalAdminCluster#operating_system}

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.taints"></a>

```typescript
public readonly taints: IResolvable | GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints</a>[]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#taints GoogleGkeonpremBareMetalAdminCluster#taints}

---

### GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs <a name="GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs.property.nodeIp">nodeIp</a></code> | <code>string</code> | The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s)
that Kubernetes may apply to the node. In case of conflict in
label keys, the applied set may differ depending on the Kubernetes
version -- it's best to assume the behavior is undefined and
conflicts should be avoided. For more information, including usage
and the valid values, see:
  - http://kubernetes.io/v1.1/docs/user-guide/labels.html
An object containing a list of "key": value pairs.
For example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#labels GoogleGkeonpremBareMetalAdminCluster#labels}

---

##### `nodeIp`<sup>Optional</sup> <a name="nodeIp" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs.property.nodeIp"></a>

```typescript
public readonly nodeIp: string;
```

- *Type:* string

The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#node_ip GoogleGkeonpremBareMetalAdminCluster#node_ip}

---

### GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints <a name="GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.property.effect">effect</a></code> | <code>string</code> | Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.property.key">key</a></code> | <code>string</code> | Key associated with the effect. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.property.value">value</a></code> | <code>string</code> | Value associated with the effect. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#effect GoogleGkeonpremBareMetalAdminCluster#effect}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Key associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#key GoogleGkeonpremBareMetalAdminCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#value GoogleGkeonpremBareMetalAdminCluster#value}

---

### GoogleGkeonpremBareMetalAdminClusterFleet <a name="GoogleGkeonpremBareMetalAdminClusterFleet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleet.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterFleet: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleet = { ... }
```


### GoogleGkeonpremBareMetalAdminClusterLoadBalancer <a name="GoogleGkeonpremBareMetalAdminClusterLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancer.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterLoadBalancer: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancer.property.portConfig">portConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a></code> | port_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancer.property.vipConfig">vipConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a></code> | vip_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancer.property.manualLbConfig">manualLbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a></code> | manual_lb_config block. |

---

##### `portConfig`<sup>Required</sup> <a name="portConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancer.property.portConfig"></a>

```typescript
public readonly portConfig: GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a>

port_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#port_config GoogleGkeonpremBareMetalAdminCluster#port_config}

---

##### `vipConfig`<sup>Required</sup> <a name="vipConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancer.property.vipConfig"></a>

```typescript
public readonly vipConfig: GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a>

vip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#vip_config GoogleGkeonpremBareMetalAdminCluster#vip_config}

---

##### `manualLbConfig`<sup>Optional</sup> <a name="manualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancer.property.manualLbConfig"></a>

```typescript
public readonly manualLbConfig: GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a>

manual_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#manual_lb_config GoogleGkeonpremBareMetalAdminCluster#manual_lb_config}

---

### GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig <a name="GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether manual load balancing is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether manual load balancing is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#enabled GoogleGkeonpremBareMetalAdminCluster#enabled}

---

### GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig <a name="GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig.property.controlPlaneLoadBalancerPort">controlPlaneLoadBalancerPort</a></code> | <code>number</code> | The port that control plane hosted load balancers will listen on. |

---

##### `controlPlaneLoadBalancerPort`<sup>Required</sup> <a name="controlPlaneLoadBalancerPort" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig.property.controlPlaneLoadBalancerPort"></a>

```typescript
public readonly controlPlaneLoadBalancerPort: number;
```

- *Type:* number

The port that control plane hosted load balancers will listen on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#control_plane_load_balancer_port GoogleGkeonpremBareMetalAdminCluster#control_plane_load_balancer_port}

---

### GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig <a name="GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig.property.controlPlaneVip">controlPlaneVip</a></code> | <code>string</code> | The VIP which you previously set aside for the Kubernetes API of this Bare Metal Admin Cluster. |

---

##### `controlPlaneVip`<sup>Required</sup> <a name="controlPlaneVip" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig.property.controlPlaneVip"></a>

```typescript
public readonly controlPlaneVip: string;
```

- *Type:* string

The VIP which you previously set aside for the Kubernetes API of this Bare Metal Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#control_plane_vip GoogleGkeonpremBareMetalAdminCluster#control_plane_vip}

---

### GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig <a name="GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterMaintenanceConfig: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig.property.maintenanceAddressCidrBlocks">maintenanceAddressCidrBlocks</a></code> | <code>string[]</code> | All IPv4 address from these ranges will be placed into maintenance mode. |

---

##### `maintenanceAddressCidrBlocks`<sup>Required</sup> <a name="maintenanceAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig.property.maintenanceAddressCidrBlocks"></a>

```typescript
public readonly maintenanceAddressCidrBlocks: string[];
```

- *Type:* string[]

All IPv4 address from these ranges will be placed into maintenance mode.

Nodes in maintenance mode will be cordoned and drained. When both of these
are true, the "baremetal.cluster.gke.io/maintenance" annotation will be set
on the node resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#maintenance_address_cidr_blocks GoogleGkeonpremBareMetalAdminCluster#maintenance_address_cidr_blocks}

---

### GoogleGkeonpremBareMetalAdminClusterNetworkConfig <a name="GoogleGkeonpremBareMetalAdminClusterNetworkConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfig.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterNetworkConfig: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfig.property.islandModeCidr">islandModeCidr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a></code> | island_mode_cidr block. |

---

##### `islandModeCidr`<sup>Optional</sup> <a name="islandModeCidr" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfig.property.islandModeCidr"></a>

```typescript
public readonly islandModeCidr: GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a>

island_mode_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#island_mode_cidr GoogleGkeonpremBareMetalAdminCluster#island_mode_cidr}

---

### GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr <a name="GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>string[]</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>string[]</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. |

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr.property.podAddressCidrBlocks"></a>

```typescript
public readonly podAddressCidrBlocks: string[];
```

- *Type:* string[]

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#pod_address_cidr_blocks GoogleGkeonpremBareMetalAdminCluster#pod_address_cidr_blocks}

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr.property.serviceAddressCidrBlocks"></a>

```typescript
public readonly serviceAddressCidrBlocks: string[];
```

- *Type:* string[]

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#service_address_cidr_blocks GoogleGkeonpremBareMetalAdminCluster#service_address_cidr_blocks}

---

### GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig <a name="GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterNodeAccessConfig: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig.property.loginUser">loginUser</a></code> | <code>string</code> | LoginUser is the user name used to access node machines. It defaults to "root" if not set. |

---

##### `loginUser`<sup>Optional</sup> <a name="loginUser" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig.property.loginUser"></a>

```typescript
public readonly loginUser: string;
```

- *Type:* string

LoginUser is the user name used to access node machines. It defaults to "root" if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#login_user GoogleGkeonpremBareMetalAdminCluster#login_user}

---

### GoogleGkeonpremBareMetalAdminClusterNodeConfig <a name="GoogleGkeonpremBareMetalAdminClusterNodeConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfig.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterNodeConfig: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfig.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>number</code> | The maximum number of pods a node can run. |

---

##### `maxPodsPerNode`<sup>Optional</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfig.property.maxPodsPerNode"></a>

```typescript
public readonly maxPodsPerNode: number;
```

- *Type:* number

The maximum number of pods a node can run.

The size of the CIDR range
assigned to the node will be derived from this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#max_pods_per_node GoogleGkeonpremBareMetalAdminCluster#max_pods_per_node}

---

### GoogleGkeonpremBareMetalAdminClusterProxy <a name="GoogleGkeonpremBareMetalAdminClusterProxy" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxy.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterProxy: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxy.property.uri">uri</a></code> | <code>string</code> | Specifies the address of your proxy server. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxy.property.noProxy">noProxy</a></code> | <code>string[]</code> | A list of IPs, hostnames, and domains that should skip the proxy. For example: ["127.0.0.1", "example.com", ".corp", "localhost"]. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxy.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Specifies the address of your proxy server.

For Example: http://domain
WARNING: Do not provide credentials in the format
of http://(username:password@)domain these will be rejected by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#uri GoogleGkeonpremBareMetalAdminCluster#uri}

---

##### `noProxy`<sup>Optional</sup> <a name="noProxy" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxy.property.noProxy"></a>

```typescript
public readonly noProxy: string[];
```

- *Type:* string[]

A list of IPs, hostnames, and domains that should skip the proxy. For example: ["127.0.0.1", "example.com", ".corp", "localhost"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#no_proxy GoogleGkeonpremBareMetalAdminCluster#no_proxy}

---

### GoogleGkeonpremBareMetalAdminClusterSecurityConfig <a name="GoogleGkeonpremBareMetalAdminClusterSecurityConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfig.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterSecurityConfig: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a></code> | authorization block. |

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfig.property.authorization"></a>

```typescript
public readonly authorization: GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#authorization GoogleGkeonpremBareMetalAdminCluster#authorization}

---

### GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization <a name="GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization.property.adminUsers">adminUsers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers</a>[]</code> | admin_users block. |

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization.property.adminUsers"></a>

```typescript
public readonly adminUsers: IResolvable | GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers</a>[]

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#admin_users GoogleGkeonpremBareMetalAdminCluster#admin_users}

---

### GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers <a name="GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers.property.username">username</a></code> | <code>string</code> | The name of the user, e.g. 'my-gcp-id@gmail.com'. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The name of the user, e.g. 'my-gcp-id@gmail.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#username GoogleGkeonpremBareMetalAdminCluster#username}

---

### GoogleGkeonpremBareMetalAdminClusterStatus <a name="GoogleGkeonpremBareMetalAdminClusterStatus" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatus.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterStatus: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatus = { ... }
```


### GoogleGkeonpremBareMetalAdminClusterStatusConditions <a name="GoogleGkeonpremBareMetalAdminClusterStatusConditions" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditions.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterStatusConditions: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditions = { ... }
```


### GoogleGkeonpremBareMetalAdminClusterStorage <a name="GoogleGkeonpremBareMetalAdminClusterStorage" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorage.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterStorage: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorage.property.lvpNodeMountsConfig">lvpNodeMountsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a></code> | lvp_node_mounts_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorage.property.lvpShareConfig">lvpShareConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig</a></code> | lvp_share_config block. |

---

##### `lvpNodeMountsConfig`<sup>Required</sup> <a name="lvpNodeMountsConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorage.property.lvpNodeMountsConfig"></a>

```typescript
public readonly lvpNodeMountsConfig: GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a>

lvp_node_mounts_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#lvp_node_mounts_config GoogleGkeonpremBareMetalAdminCluster#lvp_node_mounts_config}

---

##### `lvpShareConfig`<sup>Required</sup> <a name="lvpShareConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorage.property.lvpShareConfig"></a>

```typescript
public readonly lvpShareConfig: GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig</a>

lvp_share_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#lvp_share_config GoogleGkeonpremBareMetalAdminCluster#lvp_share_config}

---

### GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig <a name="GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig.property.path">path</a></code> | <code>string</code> | The host machine path. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig.property.storageClass">storageClass</a></code> | <code>string</code> | The StorageClass name that PVs will be created with. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The host machine path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#path GoogleGkeonpremBareMetalAdminCluster#path}

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

The StorageClass name that PVs will be created with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#storage_class GoogleGkeonpremBareMetalAdminCluster#storage_class}

---

### GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig <a name="GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterStorageLvpShareConfig: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig.property.lvpConfig">lvpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a></code> | lvp_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig.property.sharedPathPvCount">sharedPathPvCount</a></code> | <code>number</code> | The number of subdirectories to create under path. |

---

##### `lvpConfig`<sup>Required</sup> <a name="lvpConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig.property.lvpConfig"></a>

```typescript
public readonly lvpConfig: GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a>

lvp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#lvp_config GoogleGkeonpremBareMetalAdminCluster#lvp_config}

---

##### `sharedPathPvCount`<sup>Optional</sup> <a name="sharedPathPvCount" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig.property.sharedPathPvCount"></a>

```typescript
public readonly sharedPathPvCount: number;
```

- *Type:* number

The number of subdirectories to create under path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#shared_path_pv_count GoogleGkeonpremBareMetalAdminCluster#shared_path_pv_count}

---

### GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig <a name="GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig.property.path">path</a></code> | <code>string</code> | The host machine path. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig.property.storageClass">storageClass</a></code> | <code>string</code> | The StorageClass name that PVs will be created with. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The host machine path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#path GoogleGkeonpremBareMetalAdminCluster#path}

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

The StorageClass name that PVs will be created with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#storage_class GoogleGkeonpremBareMetalAdminCluster#storage_class}

---

### GoogleGkeonpremBareMetalAdminClusterTimeouts <a name="GoogleGkeonpremBareMetalAdminClusterTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeouts.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterTimeouts: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#create GoogleGkeonpremBareMetalAdminCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#delete GoogleGkeonpremBareMetalAdminCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#update GoogleGkeonpremBareMetalAdminCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#create GoogleGkeonpremBareMetalAdminCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#delete GoogleGkeonpremBareMetalAdminCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gkeonprem_bare_metal_admin_cluster#update GoogleGkeonpremBareMetalAdminCluster#update}.

---

### GoogleGkeonpremBareMetalAdminClusterValidationCheck <a name="GoogleGkeonpremBareMetalAdminClusterValidationCheck" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheck.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterValidationCheck: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheck = { ... }
```


### GoogleGkeonpremBareMetalAdminClusterValidationCheckStatus <a name="GoogleGkeonpremBareMetalAdminClusterValidationCheckStatus" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatus.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterValidationCheckStatus: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatus = { ... }
```


### GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResult <a name="GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResult" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResult.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremBareMetalAdminClusterValidationCheckStatusResult: googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.resetEnableApplicationLogs">resetEnableApplicationLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableApplicationLogs` <a name="resetEnableApplicationLogs" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.resetEnableApplicationLogs"></a>

```typescript
public resetEnableApplicationLogs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.enableApplicationLogsInput">enableApplicationLogsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.enableApplicationLogs">enableApplicationLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperations">GoogleGkeonpremBareMetalAdminClusterClusterOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableApplicationLogsInput`<sup>Optional</sup> <a name="enableApplicationLogsInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.enableApplicationLogsInput"></a>

```typescript
public readonly enableApplicationLogsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableApplicationLogs`<sup>Required</sup> <a name="enableApplicationLogs" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.enableApplicationLogs"></a>

```typescript
public readonly enableApplicationLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterClusterOperations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterClusterOperations">GoogleGkeonpremBareMetalAdminClusterClusterOperations</a>

---


### GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList <a name="GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs">GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs">GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs</a>[]

---


### GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.argumentInput">argumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.argument">argument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs">GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `argumentInput`<sup>Optional</sup> <a name="argumentInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.argumentInput"></a>

```typescript
public readonly argumentInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `argument`<sup>Required</sup> <a name="argument" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.argument"></a>

```typescript
public readonly argument: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs">GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs</a>

---


### GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList <a name="GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs</a>[]

---


### GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resetNodeIp">resetNodeIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNodeIp` <a name="resetNodeIp" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resetNodeIp"></a>

```typescript
public resetNodeIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.nodeIpInput">nodeIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.nodeIp">nodeIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nodeIpInput`<sup>Optional</sup> <a name="nodeIpInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.nodeIpInput"></a>

```typescript
public readonly nodeIpInput: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nodeIp`<sup>Required</sup> <a name="nodeIp" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.nodeIp"></a>

```typescript
public readonly nodeIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs</a>

---


### GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.putNodeConfigs">putNodeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetNodeConfigs">resetNodeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetTaints">resetTaints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeConfigs` <a name="putNodeConfigs" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.putNodeConfigs"></a>

```typescript
public putNodeConfigs(value: IResolvable | GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.putNodeConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs</a>[]

---

##### `putTaints` <a name="putTaints" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.putTaints"></a>

```typescript
public putTaints(value: IResolvable | GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.putTaints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints</a>[]

---

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNodeConfigs` <a name="resetNodeConfigs" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetNodeConfigs"></a>

```typescript
public resetNodeConfigs(): void
```

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetOperatingSystem"></a>

```typescript
public resetOperatingSystem(): void
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetTaints"></a>

```typescript
public resetTaints(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.nodeConfigs">nodeConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.nodeConfigsInput">nodeConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.operatingSystemInput">operatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.taintsInput">taintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeConfigs`<sup>Required</sup> <a name="nodeConfigs" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.nodeConfigs"></a>

```typescript
public readonly nodeConfigs: GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList</a>

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.taints"></a>

```typescript
public readonly taints: GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nodeConfigsInput`<sup>Optional</sup> <a name="nodeConfigsInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.nodeConfigsInput"></a>

```typescript
public readonly nodeConfigsInput: IResolvable | GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs</a>[]

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.operatingSystemInput"></a>

```typescript
public readonly operatingSystemInput: string;
```

- *Type:* string

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.taintsInput"></a>

```typescript
public readonly taintsInput: IResolvable | GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints</a>[]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a>

---


### GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList <a name="GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints</a>[]

---


### GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resetEffect">resetEffect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffect` <a name="resetEffect" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resetEffect"></a>

```typescript
public resetEffect(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints</a>

---


### GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.putNodePoolConfig">putNodePoolConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodePoolConfig` <a name="putNodePoolConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.putNodePoolConfig"></a>

```typescript
public putNodePoolConfig(value: GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.putNodePoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.nodePoolConfig">nodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.nodePoolConfigInput">nodePoolConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodePoolConfig`<sup>Required</sup> <a name="nodePoolConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.nodePoolConfig"></a>

```typescript
public readonly nodePoolConfig: GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference</a>

---

##### `nodePoolConfigInput`<sup>Optional</sup> <a name="nodePoolConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.nodePoolConfigInput"></a>

```typescript
public readonly nodePoolConfigInput: GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a>

---


### GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.putApiServerArgs">putApiServerArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.putControlPlaneNodePoolConfig">putControlPlaneNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.resetApiServerArgs">resetApiServerArgs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiServerArgs` <a name="putApiServerArgs" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.putApiServerArgs"></a>

```typescript
public putApiServerArgs(value: IResolvable | GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.putApiServerArgs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs">GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs</a>[]

---

##### `putControlPlaneNodePoolConfig` <a name="putControlPlaneNodePoolConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.putControlPlaneNodePoolConfig"></a>

```typescript
public putControlPlaneNodePoolConfig(value: GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.putControlPlaneNodePoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a>

---

##### `resetApiServerArgs` <a name="resetApiServerArgs" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.resetApiServerArgs"></a>

```typescript
public resetApiServerArgs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.apiServerArgs">apiServerArgs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList">GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.controlPlaneNodePoolConfig">controlPlaneNodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.apiServerArgsInput">apiServerArgsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs">GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.controlPlaneNodePoolConfigInput">controlPlaneNodePoolConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlane">GoogleGkeonpremBareMetalAdminClusterControlPlane</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiServerArgs`<sup>Required</sup> <a name="apiServerArgs" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.apiServerArgs"></a>

```typescript
public readonly apiServerArgs: GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList">GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList</a>

---

##### `controlPlaneNodePoolConfig`<sup>Required</sup> <a name="controlPlaneNodePoolConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.controlPlaneNodePoolConfig"></a>

```typescript
public readonly controlPlaneNodePoolConfig: GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference</a>

---

##### `apiServerArgsInput`<sup>Optional</sup> <a name="apiServerArgsInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.apiServerArgsInput"></a>

```typescript
public readonly apiServerArgsInput: IResolvable | GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs">GoogleGkeonpremBareMetalAdminClusterControlPlaneApiServerArgs</a>[]

---

##### `controlPlaneNodePoolConfigInput`<sup>Optional</sup> <a name="controlPlaneNodePoolConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.controlPlaneNodePoolConfigInput"></a>

```typescript
public readonly controlPlaneNodePoolConfigInput: GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GoogleGkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterControlPlane;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterControlPlane">GoogleGkeonpremBareMetalAdminClusterControlPlane</a>

---


### GoogleGkeonpremBareMetalAdminClusterFleetList <a name="GoogleGkeonpremBareMetalAdminClusterFleetList" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremBareMetalAdminClusterFleetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleGkeonpremBareMetalAdminClusterFleetOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterFleetOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.property.membership">membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleet">GoogleGkeonpremBareMetalAdminClusterFleet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterFleet;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterFleet">GoogleGkeonpremBareMetalAdminClusterFleet</a>

---


### GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a>

---


### GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putManualLbConfig">putManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putPortConfig">putPortConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putVipConfig">putVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.resetManualLbConfig">resetManualLbConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManualLbConfig` <a name="putManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putManualLbConfig"></a>

```typescript
public putManualLbConfig(value: GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putManualLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a>

---

##### `putPortConfig` <a name="putPortConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putPortConfig"></a>

```typescript
public putPortConfig(value: GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putPortConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a>

---

##### `putVipConfig` <a name="putVipConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putVipConfig"></a>

```typescript
public putVipConfig(value: GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putVipConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a>

---

##### `resetManualLbConfig` <a name="resetManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.resetManualLbConfig"></a>

```typescript
public resetManualLbConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.manualLbConfig">manualLbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.portConfig">portConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.vipConfig">vipConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.manualLbConfigInput">manualLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.portConfigInput">portConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.vipConfigInput">vipConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancer">GoogleGkeonpremBareMetalAdminClusterLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manualLbConfig`<sup>Required</sup> <a name="manualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.manualLbConfig"></a>

```typescript
public readonly manualLbConfig: GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference</a>

---

##### `portConfig`<sup>Required</sup> <a name="portConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.portConfig"></a>

```typescript
public readonly portConfig: GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference</a>

---

##### `vipConfig`<sup>Required</sup> <a name="vipConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.vipConfig"></a>

```typescript
public readonly vipConfig: GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference</a>

---

##### `manualLbConfigInput`<sup>Optional</sup> <a name="manualLbConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.manualLbConfigInput"></a>

```typescript
public readonly manualLbConfigInput: GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a>

---

##### `portConfigInput`<sup>Optional</sup> <a name="portConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.portConfigInput"></a>

```typescript
public readonly portConfigInput: GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a>

---

##### `vipConfigInput`<sup>Optional</sup> <a name="vipConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.vipConfigInput"></a>

```typescript
public readonly vipConfigInput: GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancer">GoogleGkeonpremBareMetalAdminClusterLoadBalancer</a>

---


### GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.controlPlaneLoadBalancerPortInput">controlPlaneLoadBalancerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.controlPlaneLoadBalancerPort">controlPlaneLoadBalancerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlPlaneLoadBalancerPortInput`<sup>Optional</sup> <a name="controlPlaneLoadBalancerPortInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.controlPlaneLoadBalancerPortInput"></a>

```typescript
public readonly controlPlaneLoadBalancerPortInput: number;
```

- *Type:* number

---

##### `controlPlaneLoadBalancerPort`<sup>Required</sup> <a name="controlPlaneLoadBalancerPort" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.controlPlaneLoadBalancerPort"></a>

```typescript
public readonly controlPlaneLoadBalancerPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a>

---


### GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput">controlPlaneVipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip">controlPlaneVip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlPlaneVipInput`<sup>Optional</sup> <a name="controlPlaneVipInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput"></a>

```typescript
public readonly controlPlaneVipInput: string;
```

- *Type:* string

---

##### `controlPlaneVip`<sup>Required</sup> <a name="controlPlaneVip" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip"></a>

```typescript
public readonly controlPlaneVip: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GoogleGkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a>

---


### GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.maintenanceAddressCidrBlocksInput">maintenanceAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.maintenanceAddressCidrBlocks">maintenanceAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig">GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maintenanceAddressCidrBlocksInput`<sup>Optional</sup> <a name="maintenanceAddressCidrBlocksInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.maintenanceAddressCidrBlocksInput"></a>

```typescript
public readonly maintenanceAddressCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `maintenanceAddressCidrBlocks`<sup>Required</sup> <a name="maintenanceAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.maintenanceAddressCidrBlocks"></a>

```typescript
public readonly maintenanceAddressCidrBlocks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig">GoogleGkeonpremBareMetalAdminClusterMaintenanceConfig</a>

---


### GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.podAddressCidrBlocksInput">podAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.serviceAddressCidrBlocksInput">serviceAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `podAddressCidrBlocksInput`<sup>Optional</sup> <a name="podAddressCidrBlocksInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.podAddressCidrBlocksInput"></a>

```typescript
public readonly podAddressCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `serviceAddressCidrBlocksInput`<sup>Optional</sup> <a name="serviceAddressCidrBlocksInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.serviceAddressCidrBlocksInput"></a>

```typescript
public readonly serviceAddressCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.podAddressCidrBlocks"></a>

```typescript
public readonly podAddressCidrBlocks: string[];
```

- *Type:* string[]

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.serviceAddressCidrBlocks"></a>

```typescript
public readonly serviceAddressCidrBlocks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a>

---


### GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.putIslandModeCidr">putIslandModeCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.resetIslandModeCidr">resetIslandModeCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIslandModeCidr` <a name="putIslandModeCidr" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.putIslandModeCidr"></a>

```typescript
public putIslandModeCidr(value: GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.putIslandModeCidr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a>

---

##### `resetIslandModeCidr` <a name="resetIslandModeCidr" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.resetIslandModeCidr"></a>

```typescript
public resetIslandModeCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.islandModeCidr">islandModeCidr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference">GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.islandModeCidrInput">islandModeCidrInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfig">GoogleGkeonpremBareMetalAdminClusterNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `islandModeCidr`<sup>Required</sup> <a name="islandModeCidr" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.islandModeCidr"></a>

```typescript
public readonly islandModeCidr: GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference">GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference</a>

---

##### `islandModeCidrInput`<sup>Optional</sup> <a name="islandModeCidrInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.islandModeCidrInput"></a>

```typescript
public readonly islandModeCidrInput: GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GoogleGkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNetworkConfig">GoogleGkeonpremBareMetalAdminClusterNetworkConfig</a>

---


### GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.resetLoginUser">resetLoginUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLoginUser` <a name="resetLoginUser" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.resetLoginUser"></a>

```typescript
public resetLoginUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.loginUserInput">loginUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.loginUser">loginUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig">GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loginUserInput`<sup>Optional</sup> <a name="loginUserInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.loginUserInput"></a>

```typescript
public readonly loginUserInput: string;
```

- *Type:* string

---

##### `loginUser`<sup>Required</sup> <a name="loginUser" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.loginUser"></a>

```typescript
public readonly loginUser: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig">GoogleGkeonpremBareMetalAdminClusterNodeAccessConfig</a>

---


### GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.resetMaxPodsPerNode">resetMaxPodsPerNode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxPodsPerNode` <a name="resetMaxPodsPerNode" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.resetMaxPodsPerNode"></a>

```typescript
public resetMaxPodsPerNode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.maxPodsPerNodeInput">maxPodsPerNodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfig">GoogleGkeonpremBareMetalAdminClusterNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxPodsPerNodeInput`<sup>Optional</sup> <a name="maxPodsPerNodeInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.maxPodsPerNodeInput"></a>

```typescript
public readonly maxPodsPerNodeInput: number;
```

- *Type:* number

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.maxPodsPerNode"></a>

```typescript
public readonly maxPodsPerNode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterNodeConfig">GoogleGkeonpremBareMetalAdminClusterNodeConfig</a>

---


### GoogleGkeonpremBareMetalAdminClusterProxyOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterProxyOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.resetNoProxy">resetNoProxy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNoProxy` <a name="resetNoProxy" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.resetNoProxy"></a>

```typescript
public resetNoProxy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.property.noProxyInput">noProxyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.property.noProxy">noProxy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxy">GoogleGkeonpremBareMetalAdminClusterProxy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `noProxyInput`<sup>Optional</sup> <a name="noProxyInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.property.noProxyInput"></a>

```typescript
public readonly noProxyInput: string[];
```

- *Type:* string[]

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `noProxy`<sup>Required</sup> <a name="noProxy" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.property.noProxy"></a>

```typescript
public readonly noProxy: string[];
```

- *Type:* string[]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterProxy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterProxy">GoogleGkeonpremBareMetalAdminClusterProxy</a>

---


### GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList <a name="GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers</a>[]

---


### GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers</a>

---


### GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.putAdminUsers">putAdminUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminUsers` <a name="putAdminUsers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.putAdminUsers"></a>

```typescript
public putAdminUsers(value: IResolvable | GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.adminUsers">adminUsers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.adminUsersInput">adminUsersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.adminUsers"></a>

```typescript
public readonly adminUsers: GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList</a>

---

##### `adminUsersInput`<sup>Optional</sup> <a name="adminUsersInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.adminUsersInput"></a>

```typescript
public readonly adminUsersInput: IResolvable | GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a>

---


### GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.resetAuthorization">resetAuthorization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorization` <a name="putAuthorization" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.putAuthorization"></a>

```typescript
public putAuthorization(value: GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a>

---

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.authorizationInput">authorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfig">GoogleGkeonpremBareMetalAdminClusterSecurityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.authorization"></a>

```typescript
public readonly authorization: GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference</a>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GoogleGkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterSecurityConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterSecurityConfig">GoogleGkeonpremBareMetalAdminClusterSecurityConfig</a>

---


### GoogleGkeonpremBareMetalAdminClusterStatusConditionsList <a name="GoogleGkeonpremBareMetalAdminClusterStatusConditionsList" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditions">GoogleGkeonpremBareMetalAdminClusterStatusConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterStatusConditions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditions">GoogleGkeonpremBareMetalAdminClusterStatusConditions</a>

---


### GoogleGkeonpremBareMetalAdminClusterStatusList <a name="GoogleGkeonpremBareMetalAdminClusterStatusList" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremBareMetalAdminClusterStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleGkeonpremBareMetalAdminClusterStatusOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterStatusOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList">GoogleGkeonpremBareMetalAdminClusterStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatus">GoogleGkeonpremBareMetalAdminClusterStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.property.conditions"></a>

```typescript
public readonly conditions: GoogleGkeonpremBareMetalAdminClusterStatusConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusConditionsList">GoogleGkeonpremBareMetalAdminClusterStatusConditionsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterStatus;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStatus">GoogleGkeonpremBareMetalAdminClusterStatus</a>

---


### GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a>

---


### GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a>

---


### GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.putLvpConfig">putLvpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.resetSharedPathPvCount">resetSharedPathPvCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLvpConfig` <a name="putLvpConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.putLvpConfig"></a>

```typescript
public putLvpConfig(value: GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.putLvpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a>

---

##### `resetSharedPathPvCount` <a name="resetSharedPathPvCount" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.resetSharedPathPvCount"></a>

```typescript
public resetSharedPathPvCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.lvpConfig">lvpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.lvpConfigInput">lvpConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.sharedPathPvCountInput">sharedPathPvCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.sharedPathPvCount">sharedPathPvCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lvpConfig`<sup>Required</sup> <a name="lvpConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.lvpConfig"></a>

```typescript
public readonly lvpConfig: GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference</a>

---

##### `lvpConfigInput`<sup>Optional</sup> <a name="lvpConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.lvpConfigInput"></a>

```typescript
public readonly lvpConfigInput: GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a>

---

##### `sharedPathPvCountInput`<sup>Optional</sup> <a name="sharedPathPvCountInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.sharedPathPvCountInput"></a>

```typescript
public readonly sharedPathPvCountInput: number;
```

- *Type:* number

---

##### `sharedPathPvCount`<sup>Required</sup> <a name="sharedPathPvCount" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.sharedPathPvCount"></a>

```typescript
public readonly sharedPathPvCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig</a>

---


### GoogleGkeonpremBareMetalAdminClusterStorageOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterStorageOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.putLvpNodeMountsConfig">putLvpNodeMountsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.putLvpShareConfig">putLvpShareConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLvpNodeMountsConfig` <a name="putLvpNodeMountsConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.putLvpNodeMountsConfig"></a>

```typescript
public putLvpNodeMountsConfig(value: GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.putLvpNodeMountsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a>

---

##### `putLvpShareConfig` <a name="putLvpShareConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.putLvpShareConfig"></a>

```typescript
public putLvpShareConfig(value: GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.putLvpShareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpNodeMountsConfig">lvpNodeMountsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpShareConfig">lvpShareConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpNodeMountsConfigInput">lvpNodeMountsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpShareConfigInput">lvpShareConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorage">GoogleGkeonpremBareMetalAdminClusterStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lvpNodeMountsConfig`<sup>Required</sup> <a name="lvpNodeMountsConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpNodeMountsConfig"></a>

```typescript
public readonly lvpNodeMountsConfig: GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference</a>

---

##### `lvpShareConfig`<sup>Required</sup> <a name="lvpShareConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpShareConfig"></a>

```typescript
public readonly lvpShareConfig: GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference">GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference</a>

---

##### `lvpNodeMountsConfigInput`<sup>Optional</sup> <a name="lvpNodeMountsConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpNodeMountsConfigInput"></a>

```typescript
public readonly lvpNodeMountsConfigInput: GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a>

---

##### `lvpShareConfigInput`<sup>Optional</sup> <a name="lvpShareConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpShareConfigInput"></a>

```typescript
public readonly lvpShareConfigInput: GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig">GoogleGkeonpremBareMetalAdminClusterStorageLvpShareConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterStorage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterStorage">GoogleGkeonpremBareMetalAdminClusterStorage</a>

---


### GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeouts">GoogleGkeonpremBareMetalAdminClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremBareMetalAdminClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterTimeouts">GoogleGkeonpremBareMetalAdminClusterTimeouts</a>

---


### GoogleGkeonpremBareMetalAdminClusterValidationCheckList <a name="GoogleGkeonpremBareMetalAdminClusterValidationCheckList" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.options">options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.scenario">scenario</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList">GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheck">GoogleGkeonpremBareMetalAdminClusterValidationCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.options"></a>

```typescript
public readonly options: string;
```

- *Type:* string

---

##### `scenario`<sup>Required</sup> <a name="scenario" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.scenario"></a>

```typescript
public readonly scenario: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.status"></a>

```typescript
public readonly status: GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList">GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterValidationCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheck">GoogleGkeonpremBareMetalAdminClusterValidationCheck</a>

---


### GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList <a name="GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.result">result</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList">GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatus">GoogleGkeonpremBareMetalAdminClusterValidationCheckStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.result"></a>

```typescript
public readonly result: GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList">GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterValidationCheckStatus;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatus">GoogleGkeonpremBareMetalAdminClusterValidationCheckStatus</a>

---


### GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList <a name="GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference <a name="GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremBareMetalAdminCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.options">options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResult">GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.options"></a>

```typescript
public readonly options: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResult;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalAdminCluster.GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResult">GoogleGkeonpremBareMetalAdminClusterValidationCheckStatusResult</a>

---



