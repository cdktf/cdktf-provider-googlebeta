# `googleDataLossPreventionDiscoveryConfig` Submodule <a name="`googleDataLossPreventionDiscoveryConfig` Submodule" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataLossPreventionDiscoveryConfig <a name="GoogleDataLossPreventionDiscoveryConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config google_data_loss_prevention_discovery_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig(scope: Construct, id: string, config: GoogleDataLossPreventionDiscoveryConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig">GoogleDataLossPreventionDiscoveryConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig">GoogleDataLossPreventionDiscoveryConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.putOrgConfig">putOrgConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.resetInspectTemplates">resetInspectTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.resetOrgConfig">resetOrgConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.resetTargets">resetTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.putActions"></a>

```typescript
public putActions(value: IResolvable | GoogleDataLossPreventionDiscoveryConfigActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.putActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActions">GoogleDataLossPreventionDiscoveryConfigActions</a>[]

---

##### `putOrgConfig` <a name="putOrgConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.putOrgConfig"></a>

```typescript
public putOrgConfig(value: GoogleDataLossPreventionDiscoveryConfigOrgConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.putOrgConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfig">GoogleDataLossPreventionDiscoveryConfigOrgConfig</a>

---

##### `putTargets` <a name="putTargets" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.putTargets"></a>

```typescript
public putTargets(value: IResolvable | GoogleDataLossPreventionDiscoveryConfigTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.putTargets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargets">GoogleDataLossPreventionDiscoveryConfigTargets</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataLossPreventionDiscoveryConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeouts">GoogleDataLossPreventionDiscoveryConfigTimeouts</a>

---

##### `resetActions` <a name="resetActions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInspectTemplates` <a name="resetInspectTemplates" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.resetInspectTemplates"></a>

```typescript
public resetInspectTemplates(): void
```

##### `resetOrgConfig` <a name="resetOrgConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.resetOrgConfig"></a>

```typescript
public resetOrgConfig(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTargets` <a name="resetTargets" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.resetTargets"></a>

```typescript
public resetTargets(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataLossPreventionDiscoveryConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.isConstruct"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.isTerraformElement"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.isTerraformResource"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.generateConfigForImport"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataLossPreventionDiscoveryConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataLossPreventionDiscoveryConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataLossPreventionDiscoveryConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataLossPreventionDiscoveryConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList">GoogleDataLossPreventionDiscoveryConfigActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.errors">errors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList">GoogleDataLossPreventionDiscoveryConfigErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.lastRunTime">lastRunTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.orgConfig">orgConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference">GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList">GoogleDataLossPreventionDiscoveryConfigTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference">GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.actionsInput">actionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActions">GoogleDataLossPreventionDiscoveryConfigActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.inspectTemplatesInput">inspectTemplatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.orgConfigInput">orgConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfig">GoogleDataLossPreventionDiscoveryConfigOrgConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.targetsInput">targetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargets">GoogleDataLossPreventionDiscoveryConfigTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeouts">GoogleDataLossPreventionDiscoveryConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.inspectTemplates">inspectTemplates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.actions"></a>

```typescript
public readonly actions: GoogleDataLossPreventionDiscoveryConfigActionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList">GoogleDataLossPreventionDiscoveryConfigActionsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.errors"></a>

```typescript
public readonly errors: GoogleDataLossPreventionDiscoveryConfigErrorsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList">GoogleDataLossPreventionDiscoveryConfigErrorsList</a>

---

##### `lastRunTime`<sup>Required</sup> <a name="lastRunTime" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.lastRunTime"></a>

```typescript
public readonly lastRunTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgConfig`<sup>Required</sup> <a name="orgConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.orgConfig"></a>

```typescript
public readonly orgConfig: GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference">GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.targets"></a>

```typescript
public readonly targets: GoogleDataLossPreventionDiscoveryConfigTargetsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList">GoogleDataLossPreventionDiscoveryConfigTargetsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference">GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | GoogleDataLossPreventionDiscoveryConfigActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActions">GoogleDataLossPreventionDiscoveryConfigActions</a>[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inspectTemplatesInput`<sup>Optional</sup> <a name="inspectTemplatesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.inspectTemplatesInput"></a>

```typescript
public readonly inspectTemplatesInput: string[];
```

- *Type:* string[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `orgConfigInput`<sup>Optional</sup> <a name="orgConfigInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.orgConfigInput"></a>

```typescript
public readonly orgConfigInput: GoogleDataLossPreventionDiscoveryConfigOrgConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfig">GoogleDataLossPreventionDiscoveryConfigOrgConfig</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.targetsInput"></a>

```typescript
public readonly targetsInput: IResolvable | GoogleDataLossPreventionDiscoveryConfigTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargets">GoogleDataLossPreventionDiscoveryConfigTargets</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataLossPreventionDiscoveryConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeouts">GoogleDataLossPreventionDiscoveryConfigTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inspectTemplates`<sup>Required</sup> <a name="inspectTemplates" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.inspectTemplates"></a>

```typescript
public readonly inspectTemplates: string[];
```

- *Type:* string[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataLossPreventionDiscoveryConfigActions <a name="GoogleDataLossPreventionDiscoveryConfigActions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActions.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigActions: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActions.property.exportData">exportData</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportData">GoogleDataLossPreventionDiscoveryConfigActionsExportData</a></code> | export_data block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActions.property.pubSubNotification">pubSubNotification</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification</a></code> | pub_sub_notification block. |

---

##### `exportData`<sup>Optional</sup> <a name="exportData" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActions.property.exportData"></a>

```typescript
public readonly exportData: GoogleDataLossPreventionDiscoveryConfigActionsExportData;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportData">GoogleDataLossPreventionDiscoveryConfigActionsExportData</a>

export_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#export_data GoogleDataLossPreventionDiscoveryConfig#export_data}

---

##### `pubSubNotification`<sup>Optional</sup> <a name="pubSubNotification" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActions.property.pubSubNotification"></a>

```typescript
public readonly pubSubNotification: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification</a>

pub_sub_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#pub_sub_notification GoogleDataLossPreventionDiscoveryConfig#pub_sub_notification}

---

### GoogleDataLossPreventionDiscoveryConfigActionsExportData <a name="GoogleDataLossPreventionDiscoveryConfigActionsExportData" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportData.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigActionsExportData: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportData.property.profileTable">profileTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable">GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable</a></code> | profile_table block. |

---

##### `profileTable`<sup>Optional</sup> <a name="profileTable" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportData.property.profileTable"></a>

```typescript
public readonly profileTable: GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable">GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable</a>

profile_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#profile_table GoogleDataLossPreventionDiscoveryConfig#profile_table}

---

### GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable <a name="GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable.property.datasetId">datasetId</a></code> | <code>string</code> | Dataset Id of the table. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable.property.projectId">projectId</a></code> | <code>string</code> | The Google Cloud Platform project ID of the project containing the table. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable.property.tableId">tableId</a></code> | <code>string</code> | Name of the table. |

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

Dataset Id of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#dataset_id GoogleDataLossPreventionDiscoveryConfig#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The Google Cloud Platform project ID of the project containing the table.

If omitted, the project ID is inferred from the API call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#project_id GoogleDataLossPreventionDiscoveryConfig#project_id}

---

##### `tableId`<sup>Optional</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

Name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#table_id GoogleDataLossPreventionDiscoveryConfig#table_id}

---

### GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification <a name="GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigActionsPubSubNotification: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification.property.detailOfMessage">detailOfMessage</a></code> | <code>string</code> | How much data to include in the pub/sub message. Possible values: ["TABLE_PROFILE", "RESOURCE_NAME"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification.property.event">event</a></code> | <code>string</code> | The type of event that triggers a Pub/Sub. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification.property.pubsubCondition">pubsubCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition</a></code> | pubsub_condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification.property.topic">topic</a></code> | <code>string</code> | Cloud Pub/Sub topic to send notifications to. Format is projects/{project}/topics/{topic}. |

---

##### `detailOfMessage`<sup>Optional</sup> <a name="detailOfMessage" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification.property.detailOfMessage"></a>

```typescript
public readonly detailOfMessage: string;
```

- *Type:* string

How much data to include in the pub/sub message. Possible values: ["TABLE_PROFILE", "RESOURCE_NAME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#detail_of_message GoogleDataLossPreventionDiscoveryConfig#detail_of_message}

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* string

The type of event that triggers a Pub/Sub.

At most one PubSubNotification per EventType is permitted. Possible values: ["NEW_PROFILE", "CHANGED_PROFILE", "SCORE_INCREASED", "ERROR_CHANGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#event GoogleDataLossPreventionDiscoveryConfig#event}

---

##### `pubsubCondition`<sup>Optional</sup> <a name="pubsubCondition" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification.property.pubsubCondition"></a>

```typescript
public readonly pubsubCondition: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition</a>

pubsub_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#pubsub_condition GoogleDataLossPreventionDiscoveryConfig#pubsub_condition}

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Cloud Pub/Sub topic to send notifications to. Format is projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#topic GoogleDataLossPreventionDiscoveryConfig#topic}

---

### GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition <a name="GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition.property.expressions">expressions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions</a></code> | expressions block. |

---

##### `expressions`<sup>Optional</sup> <a name="expressions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition.property.expressions"></a>

```typescript
public readonly expressions: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions</a>

expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#expressions GoogleDataLossPreventionDiscoveryConfig#expressions}

---

### GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions <a name="GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions.property.logicalOperator">logicalOperator</a></code> | <code>string</code> | The operator to apply to the collection of conditions Possible values: ["OR", "AND"]. |

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#conditions GoogleDataLossPreventionDiscoveryConfig#conditions}

---

##### `logicalOperator`<sup>Optional</sup> <a name="logicalOperator" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions.property.logicalOperator"></a>

```typescript
public readonly logicalOperator: string;
```

- *Type:* string

The operator to apply to the collection of conditions Possible values: ["OR", "AND"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#logical_operator GoogleDataLossPreventionDiscoveryConfig#logical_operator}

---

### GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions <a name="GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions.property.minimumRiskScore">minimumRiskScore</a></code> | <code>string</code> | The minimum data risk score that triggers the condition. Possible values: ["HIGH", "MEDIUM_OR_HIGH"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions.property.minimumSensitivityScore">minimumSensitivityScore</a></code> | <code>string</code> | The minimum sensitivity level that triggers the condition. Possible values: ["HIGH", "MEDIUM_OR_HIGH"]. |

---

##### `minimumRiskScore`<sup>Optional</sup> <a name="minimumRiskScore" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions.property.minimumRiskScore"></a>

```typescript
public readonly minimumRiskScore: string;
```

- *Type:* string

The minimum data risk score that triggers the condition. Possible values: ["HIGH", "MEDIUM_OR_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#minimum_risk_score GoogleDataLossPreventionDiscoveryConfig#minimum_risk_score}

---

##### `minimumSensitivityScore`<sup>Optional</sup> <a name="minimumSensitivityScore" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions.property.minimumSensitivityScore"></a>

```typescript
public readonly minimumSensitivityScore: string;
```

- *Type:* string

The minimum sensitivity level that triggers the condition. Possible values: ["HIGH", "MEDIUM_OR_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#minimum_sensitivity_score GoogleDataLossPreventionDiscoveryConfig#minimum_sensitivity_score}

---

### GoogleDataLossPreventionDiscoveryConfigConfig <a name="GoogleDataLossPreventionDiscoveryConfigConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigConfig: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.location">location</a></code> | <code>string</code> | Location to create the discovery config in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.parent">parent</a></code> | <code>string</code> | The parent of the discovery config in any of the following formats:. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.actions">actions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActions">GoogleDataLossPreventionDiscoveryConfigActions</a>[]</code> | actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.displayName">displayName</a></code> | <code>string</code> | Display Name (max 1000 Chars). |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#id GoogleDataLossPreventionDiscoveryConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.inspectTemplates">inspectTemplates</a></code> | <code>string[]</code> | Detection logic for profile generation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.orgConfig">orgConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfig">GoogleDataLossPreventionDiscoveryConfigOrgConfig</a></code> | org_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.status">status</a></code> | <code>string</code> | Required. A status for this configuration Possible values: ["RUNNING", "PAUSED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.targets">targets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargets">GoogleDataLossPreventionDiscoveryConfigTargets</a>[]</code> | targets block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeouts">GoogleDataLossPreventionDiscoveryConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location to create the discovery config in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#location GoogleDataLossPreventionDiscoveryConfig#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of the discovery config in any of the following formats:.

* 'projects/{{project}}/locations/{{location}}'
* 'organizations/{{organization_id}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#parent GoogleDataLossPreventionDiscoveryConfig#parent}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.actions"></a>

```typescript
public readonly actions: IResolvable | GoogleDataLossPreventionDiscoveryConfigActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActions">GoogleDataLossPreventionDiscoveryConfigActions</a>[]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#actions GoogleDataLossPreventionDiscoveryConfig#actions}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display Name (max 1000 Chars).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#display_name GoogleDataLossPreventionDiscoveryConfig#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#id GoogleDataLossPreventionDiscoveryConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inspectTemplates`<sup>Optional</sup> <a name="inspectTemplates" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.inspectTemplates"></a>

```typescript
public readonly inspectTemplates: string[];
```

- *Type:* string[]

Detection logic for profile generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#inspect_templates GoogleDataLossPreventionDiscoveryConfig#inspect_templates}

---

##### `orgConfig`<sup>Optional</sup> <a name="orgConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.orgConfig"></a>

```typescript
public readonly orgConfig: GoogleDataLossPreventionDiscoveryConfigOrgConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfig">GoogleDataLossPreventionDiscoveryConfigOrgConfig</a>

org_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#org_config GoogleDataLossPreventionDiscoveryConfig#org_config}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Required. A status for this configuration Possible values: ["RUNNING", "PAUSED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#status GoogleDataLossPreventionDiscoveryConfig#status}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.targets"></a>

```typescript
public readonly targets: IResolvable | GoogleDataLossPreventionDiscoveryConfigTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargets">GoogleDataLossPreventionDiscoveryConfigTargets</a>[]

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#targets GoogleDataLossPreventionDiscoveryConfig#targets}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataLossPreventionDiscoveryConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeouts">GoogleDataLossPreventionDiscoveryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#timeouts GoogleDataLossPreventionDiscoveryConfig#timeouts}

---

### GoogleDataLossPreventionDiscoveryConfigErrors <a name="GoogleDataLossPreventionDiscoveryConfigErrors" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrors.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigErrors: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrors = { ... }
```


### GoogleDataLossPreventionDiscoveryConfigErrorsDetails <a name="GoogleDataLossPreventionDiscoveryConfigErrorsDetails" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetails.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigErrorsDetails: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetails = { ... }
```


### GoogleDataLossPreventionDiscoveryConfigOrgConfig <a name="GoogleDataLossPreventionDiscoveryConfigOrgConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfig.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigOrgConfig: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfig.property.location">location</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation">GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation</a></code> | location block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfig.property.projectId">projectId</a></code> | <code>string</code> | The project that will run the scan. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfig.property.location"></a>

```typescript
public readonly location: GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation">GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation</a>

location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#location GoogleDataLossPreventionDiscoveryConfig#location}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The project that will run the scan.

The DLP service account that exists within this project must have access to all resources that are profiled, and the cloud DLP API must be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#project_id GoogleDataLossPreventionDiscoveryConfig#project_id}

---

### GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation <a name="GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigOrgConfigLocation: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation.property.folderId">folderId</a></code> | <code>string</code> | The ID for the folder within an organization to scan. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation.property.organizationId">organizationId</a></code> | <code>string</code> | The ID of an organization to scan. |

---

##### `folderId`<sup>Optional</sup> <a name="folderId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation.property.folderId"></a>

```typescript
public readonly folderId: string;
```

- *Type:* string

The ID for the folder within an organization to scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#folder_id GoogleDataLossPreventionDiscoveryConfig#folder_id}

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The ID of an organization to scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#organization_id GoogleDataLossPreventionDiscoveryConfig#organization_id}

---

### GoogleDataLossPreventionDiscoveryConfigTargets <a name="GoogleDataLossPreventionDiscoveryConfigTargets" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargets.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigTargets: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargets.property.bigQueryTarget">bigQueryTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget</a></code> | big_query_target block. |

---

##### `bigQueryTarget`<sup>Optional</sup> <a name="bigQueryTarget" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargets.property.bigQueryTarget"></a>

```typescript
public readonly bigQueryTarget: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget</a>

big_query_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#big_query_target GoogleDataLossPreventionDiscoveryConfig#big_query_target}

---

### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget.property.cadence">cadence</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence</a></code> | cadence block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget.property.disabled">disabled</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled</a></code> | disabled block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter</a></code> | filter block. |

---

##### `cadence`<sup>Optional</sup> <a name="cadence" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget.property.cadence"></a>

```typescript
public readonly cadence: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence</a>

cadence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#cadence GoogleDataLossPreventionDiscoveryConfig#cadence}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget.property.conditions"></a>

```typescript
public readonly conditions: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#conditions GoogleDataLossPreventionDiscoveryConfig#conditions}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget.property.disabled"></a>

```typescript
public readonly disabled: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled</a>

disabled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#disabled GoogleDataLossPreventionDiscoveryConfig#disabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget.property.filter"></a>

```typescript
public readonly filter: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#filter GoogleDataLossPreventionDiscoveryConfig#filter}

---

### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence.property.schemaModifiedCadence">schemaModifiedCadence</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence</a></code> | schema_modified_cadence block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence.property.tableModifiedCadence">tableModifiedCadence</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence</a></code> | table_modified_cadence block. |

---

##### `schemaModifiedCadence`<sup>Optional</sup> <a name="schemaModifiedCadence" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence.property.schemaModifiedCadence"></a>

```typescript
public readonly schemaModifiedCadence: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence</a>

schema_modified_cadence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#schema_modified_cadence GoogleDataLossPreventionDiscoveryConfig#schema_modified_cadence}

---

##### `tableModifiedCadence`<sup>Optional</sup> <a name="tableModifiedCadence" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence.property.tableModifiedCadence"></a>

```typescript
public readonly tableModifiedCadence: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence</a>

table_modified_cadence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#table_modified_cadence GoogleDataLossPreventionDiscoveryConfig#table_modified_cadence}

---

### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence.property.frequency">frequency</a></code> | <code>string</code> | How frequently profiles may be updated when schemas are modified. Default to monthly Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence.property.types">types</a></code> | <code>string[]</code> | The type of events to consider when deciding if the table's schema has been modified and should have the profile updated. |

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

How frequently profiles may be updated when schemas are modified. Default to monthly Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#frequency GoogleDataLossPreventionDiscoveryConfig#frequency}

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

The type of events to consider when deciding if the table's schema has been modified and should have the profile updated.

Defaults to NEW_COLUMN. Possible values: ["SCHEMA_NEW_COLUMNS", "SCHEMA_REMOVED_COLUMNS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#types GoogleDataLossPreventionDiscoveryConfig#types}

---

### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence.property.frequency">frequency</a></code> | <code>string</code> | How frequently data profiles can be updated when tables are modified. Defaults to never. Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence.property.types">types</a></code> | <code>string[]</code> | The type of events to consider when deciding if the table has been modified and should have the profile updated. |

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

How frequently data profiles can be updated when tables are modified. Defaults to never. Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#frequency GoogleDataLossPreventionDiscoveryConfig#frequency}

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

The type of events to consider when deciding if the table has been modified and should have the profile updated.

Defaults to MODIFIED_TIMESTAMP Possible values: ["TABLE_MODIFIED_TIMESTAMP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#types GoogleDataLossPreventionDiscoveryConfig#types}

---

### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions.property.createdAfter">createdAfter</a></code> | <code>string</code> | A timestamp in RFC3339 UTC "Zulu" format with nanosecond resolution and upto nine fractional digits. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions.property.orConditions">orConditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions</a></code> | or_conditions block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions.property.typeCollection">typeCollection</a></code> | <code>string</code> | Restrict discovery to categories of table types. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions.property.types">types</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes</a></code> | types block. |

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions.property.createdAfter"></a>

```typescript
public readonly createdAfter: string;
```

- *Type:* string

A timestamp in RFC3339 UTC "Zulu" format with nanosecond resolution and upto nine fractional digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#created_after GoogleDataLossPreventionDiscoveryConfig#created_after}

---

##### `orConditions`<sup>Optional</sup> <a name="orConditions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions.property.orConditions"></a>

```typescript
public readonly orConditions: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions</a>

or_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#or_conditions GoogleDataLossPreventionDiscoveryConfig#or_conditions}

---

##### `typeCollection`<sup>Optional</sup> <a name="typeCollection" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions.property.typeCollection"></a>

```typescript
public readonly typeCollection: string;
```

- *Type:* string

Restrict discovery to categories of table types.

Currently view, materialized view, snapshot and non-biglake external tables are supported. Possible values: ["BIG_QUERY_COLLECTION_ALL_TYPES", "BIG_QUERY_COLLECTION_ONLY_SUPPORTED_TYPES"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#type_collection GoogleDataLossPreventionDiscoveryConfig#type_collection}

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions.property.types"></a>

```typescript
public readonly types: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes</a>

types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#types GoogleDataLossPreventionDiscoveryConfig#types}

---

### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions.property.minAge">minAge</a></code> | <code>string</code> | Duration format. The minimum age a table must have before Cloud DLP can profile it. Value greater than 1. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions.property.minRowCount">minRowCount</a></code> | <code>number</code> | Minimum number of rows that should be present before Cloud DLP profiles as a table. |

---

##### `minAge`<sup>Optional</sup> <a name="minAge" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions.property.minAge"></a>

```typescript
public readonly minAge: string;
```

- *Type:* string

Duration format. The minimum age a table must have before Cloud DLP can profile it. Value greater than 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#min_age GoogleDataLossPreventionDiscoveryConfig#min_age}

---

##### `minRowCount`<sup>Optional</sup> <a name="minRowCount" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions.property.minRowCount"></a>

```typescript
public readonly minRowCount: number;
```

- *Type:* number

Minimum number of rows that should be present before Cloud DLP profiles as a table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#min_row_count GoogleDataLossPreventionDiscoveryConfig#min_row_count}

---

### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes.property.types">types</a></code> | <code>string[]</code> | A set of BiqQuery table types Possible values: ["BIG_QUERY_TABLE_TYPE_TABLE", "BIG_QUERY_TABLE_TYPE_EXTERNAL_BIG_LAKE"]. |

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

A set of BiqQuery table types Possible values: ["BIG_QUERY_TABLE_TYPE_TABLE", "BIG_QUERY_TABLE_TYPE_EXTERNAL_BIG_LAKE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#types GoogleDataLossPreventionDiscoveryConfig#types}

---

### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled = { ... }
```


### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter.property.otherTables">otherTables</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables</a></code> | other_tables block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter.property.tables">tables</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables</a></code> | tables block. |

---

##### `otherTables`<sup>Optional</sup> <a name="otherTables" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter.property.otherTables"></a>

```typescript
public readonly otherTables: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables</a>

other_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#other_tables GoogleDataLossPreventionDiscoveryConfig#other_tables}

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter.property.tables"></a>

```typescript
public readonly tables: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables</a>

tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#tables GoogleDataLossPreventionDiscoveryConfig#tables}

---

### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables = { ... }
```


### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables.property.includeRegexes">includeRegexes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes</a></code> | include_regexes block. |

---

##### `includeRegexes`<sup>Optional</sup> <a name="includeRegexes" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables.property.includeRegexes"></a>

```typescript
public readonly includeRegexes: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes</a>

include_regexes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#include_regexes GoogleDataLossPreventionDiscoveryConfig#include_regexes}

---

### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes.property.patterns">patterns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns</a>[]</code> | patterns block. |

---

##### `patterns`<sup>Optional</sup> <a name="patterns" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes.property.patterns"></a>

```typescript
public readonly patterns: IResolvable | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns</a>[]

patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#patterns GoogleDataLossPreventionDiscoveryConfig#patterns}

---

### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns.property.datasetIdRegex">datasetIdRegex</a></code> | <code>string</code> | if unset, this property matches all datasets. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns.property.projectIdRegex">projectIdRegex</a></code> | <code>string</code> | For organizations, if unset, will match all projects. Has no effect for data profile configurations created within a project. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns.property.tableIdRegex">tableIdRegex</a></code> | <code>string</code> | if unset, this property matches all tables. |

---

##### `datasetIdRegex`<sup>Optional</sup> <a name="datasetIdRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns.property.datasetIdRegex"></a>

```typescript
public readonly datasetIdRegex: string;
```

- *Type:* string

if unset, this property matches all datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#dataset_id_regex GoogleDataLossPreventionDiscoveryConfig#dataset_id_regex}

---

##### `projectIdRegex`<sup>Optional</sup> <a name="projectIdRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns.property.projectIdRegex"></a>

```typescript
public readonly projectIdRegex: string;
```

- *Type:* string

For organizations, if unset, will match all projects. Has no effect for data profile configurations created within a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#project_id_regex GoogleDataLossPreventionDiscoveryConfig#project_id_regex}

---

##### `tableIdRegex`<sup>Optional</sup> <a name="tableIdRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns.property.tableIdRegex"></a>

```typescript
public readonly tableIdRegex: string;
```

- *Type:* string

if unset, this property matches all tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#table_id_regex GoogleDataLossPreventionDiscoveryConfig#table_id_regex}

---

### GoogleDataLossPreventionDiscoveryConfigTimeouts <a name="GoogleDataLossPreventionDiscoveryConfigTimeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeouts.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

const googleDataLossPreventionDiscoveryConfigTimeouts: googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#create GoogleDataLossPreventionDiscoveryConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#delete GoogleDataLossPreventionDiscoveryConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#update GoogleDataLossPreventionDiscoveryConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#create GoogleDataLossPreventionDiscoveryConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#delete GoogleDataLossPreventionDiscoveryConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.29.1/docs/resources/google_data_loss_prevention_discovery_config#update GoogleDataLossPreventionDiscoveryConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.putProfileTable">putProfileTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.resetProfileTable">resetProfileTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProfileTable` <a name="putProfileTable" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.putProfileTable"></a>

```typescript
public putProfileTable(value: GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.putProfileTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable">GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable</a>

---

##### `resetProfileTable` <a name="resetProfileTable" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.resetProfileTable"></a>

```typescript
public resetProfileTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.profileTable">profileTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference">GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.profileTableInput">profileTableInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable">GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportData">GoogleDataLossPreventionDiscoveryConfigActionsExportData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `profileTable`<sup>Required</sup> <a name="profileTable" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.profileTable"></a>

```typescript
public readonly profileTable: GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference">GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference</a>

---

##### `profileTableInput`<sup>Optional</sup> <a name="profileTableInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.profileTableInput"></a>

```typescript
public readonly profileTableInput: GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable">GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigActionsExportData;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportData">GoogleDataLossPreventionDiscoveryConfigActionsExportData</a>

---


### GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.resetTableId">resetTableId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.resetDatasetId"></a>

```typescript
public resetDatasetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetTableId` <a name="resetTableId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.resetTableId"></a>

```typescript
public resetTableId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable">GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable">GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable</a>

---


### GoogleDataLossPreventionDiscoveryConfigActionsList <a name="GoogleDataLossPreventionDiscoveryConfigActionsList" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.get"></a>

```typescript
public get(index: number): GoogleDataLossPreventionDiscoveryConfigActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActions">GoogleDataLossPreventionDiscoveryConfigActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLossPreventionDiscoveryConfigActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActions">GoogleDataLossPreventionDiscoveryConfigActions</a>[]

---


### GoogleDataLossPreventionDiscoveryConfigActionsOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigActionsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.putExportData">putExportData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.putPubSubNotification">putPubSubNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.resetExportData">resetExportData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.resetPubSubNotification">resetPubSubNotification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExportData` <a name="putExportData" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.putExportData"></a>

```typescript
public putExportData(value: GoogleDataLossPreventionDiscoveryConfigActionsExportData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.putExportData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportData">GoogleDataLossPreventionDiscoveryConfigActionsExportData</a>

---

##### `putPubSubNotification` <a name="putPubSubNotification" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.putPubSubNotification"></a>

```typescript
public putPubSubNotification(value: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.putPubSubNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification</a>

---

##### `resetExportData` <a name="resetExportData" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.resetExportData"></a>

```typescript
public resetExportData(): void
```

##### `resetPubSubNotification` <a name="resetPubSubNotification" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.resetPubSubNotification"></a>

```typescript
public resetPubSubNotification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.property.exportData">exportData</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference">GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.property.pubSubNotification">pubSubNotification</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.property.exportDataInput">exportDataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportData">GoogleDataLossPreventionDiscoveryConfigActionsExportData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.property.pubSubNotificationInput">pubSubNotificationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActions">GoogleDataLossPreventionDiscoveryConfigActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exportData`<sup>Required</sup> <a name="exportData" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.property.exportData"></a>

```typescript
public readonly exportData: GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference">GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference</a>

---

##### `pubSubNotification`<sup>Required</sup> <a name="pubSubNotification" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.property.pubSubNotification"></a>

```typescript
public readonly pubSubNotification: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference</a>

---

##### `exportDataInput`<sup>Optional</sup> <a name="exportDataInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.property.exportDataInput"></a>

```typescript
public readonly exportDataInput: GoogleDataLossPreventionDiscoveryConfigActionsExportData;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsExportData">GoogleDataLossPreventionDiscoveryConfigActionsExportData</a>

---

##### `pubSubNotificationInput`<sup>Optional</sup> <a name="pubSubNotificationInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.property.pubSubNotificationInput"></a>

```typescript
public readonly pubSubNotificationInput: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLossPreventionDiscoveryConfigActions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActions">GoogleDataLossPreventionDiscoveryConfigActions</a>

---


### GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.putPubsubCondition">putPubsubCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resetDetailOfMessage">resetDetailOfMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resetEvent">resetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resetPubsubCondition">resetPubsubCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resetTopic">resetTopic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPubsubCondition` <a name="putPubsubCondition" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.putPubsubCondition"></a>

```typescript
public putPubsubCondition(value: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.putPubsubCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition</a>

---

##### `resetDetailOfMessage` <a name="resetDetailOfMessage" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resetDetailOfMessage"></a>

```typescript
public resetDetailOfMessage(): void
```

##### `resetEvent` <a name="resetEvent" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resetEvent"></a>

```typescript
public resetEvent(): void
```

##### `resetPubsubCondition` <a name="resetPubsubCondition" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resetPubsubCondition"></a>

```typescript
public resetPubsubCondition(): void
```

##### `resetTopic` <a name="resetTopic" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.resetTopic"></a>

```typescript
public resetTopic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.pubsubCondition">pubsubCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.detailOfMessageInput">detailOfMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.eventInput">eventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.pubsubConditionInput">pubsubConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.detailOfMessage">detailOfMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.event">event</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pubsubCondition`<sup>Required</sup> <a name="pubsubCondition" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.pubsubCondition"></a>

```typescript
public readonly pubsubCondition: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference</a>

---

##### `detailOfMessageInput`<sup>Optional</sup> <a name="detailOfMessageInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.detailOfMessageInput"></a>

```typescript
public readonly detailOfMessageInput: string;
```

- *Type:* string

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.eventInput"></a>

```typescript
public readonly eventInput: string;
```

- *Type:* string

---

##### `pubsubConditionInput`<sup>Optional</sup> <a name="pubsubConditionInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.pubsubConditionInput"></a>

```typescript
public readonly pubsubConditionInput: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition</a>

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `detailOfMessage`<sup>Required</sup> <a name="detailOfMessage" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.detailOfMessage"></a>

```typescript
public readonly detailOfMessage: string;
```

- *Type:* string

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification</a>

---


### GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList <a name="GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.get"></a>

```typescript
public get(index: number): GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions</a>[]

---


### GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.resetMinimumRiskScore">resetMinimumRiskScore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.resetMinimumSensitivityScore">resetMinimumSensitivityScore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimumRiskScore` <a name="resetMinimumRiskScore" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.resetMinimumRiskScore"></a>

```typescript
public resetMinimumRiskScore(): void
```

##### `resetMinimumSensitivityScore` <a name="resetMinimumSensitivityScore" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.resetMinimumSensitivityScore"></a>

```typescript
public resetMinimumSensitivityScore(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.minimumRiskScoreInput">minimumRiskScoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.minimumSensitivityScoreInput">minimumSensitivityScoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.minimumRiskScore">minimumRiskScore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.minimumSensitivityScore">minimumSensitivityScore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minimumRiskScoreInput`<sup>Optional</sup> <a name="minimumRiskScoreInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.minimumRiskScoreInput"></a>

```typescript
public readonly minimumRiskScoreInput: string;
```

- *Type:* string

---

##### `minimumSensitivityScoreInput`<sup>Optional</sup> <a name="minimumSensitivityScoreInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.minimumSensitivityScoreInput"></a>

```typescript
public readonly minimumSensitivityScoreInput: string;
```

- *Type:* string

---

##### `minimumRiskScore`<sup>Required</sup> <a name="minimumRiskScore" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.minimumRiskScore"></a>

```typescript
public readonly minimumRiskScore: string;
```

- *Type:* string

---

##### `minimumSensitivityScore`<sup>Required</sup> <a name="minimumSensitivityScore" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.minimumSensitivityScore"></a>

```typescript
public readonly minimumSensitivityScore: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions</a>

---


### GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.resetLogicalOperator">resetLogicalOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions</a>[]

---

##### `resetConditions` <a name="resetConditions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetLogicalOperator` <a name="resetLogicalOperator" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.resetLogicalOperator"></a>

```typescript
public resetLogicalOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.logicalOperatorInput">logicalOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.logicalOperator">logicalOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.conditions"></a>

```typescript
public readonly conditions: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions</a>[]

---

##### `logicalOperatorInput`<sup>Optional</sup> <a name="logicalOperatorInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.logicalOperatorInput"></a>

```typescript
public readonly logicalOperatorInput: string;
```

- *Type:* string

---

##### `logicalOperator`<sup>Required</sup> <a name="logicalOperator" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.logicalOperator"></a>

```typescript
public readonly logicalOperator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions</a>

---


### GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.putExpressions">putExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.resetExpressions">resetExpressions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpressions` <a name="putExpressions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.putExpressions"></a>

```typescript
public putExpressions(value: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.putExpressions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions</a>

---

##### `resetExpressions` <a name="resetExpressions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.resetExpressions"></a>

```typescript
public resetExpressions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.expressions">expressions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.expressionsInput">expressionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressions`<sup>Required</sup> <a name="expressions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.expressions"></a>

```typescript
public readonly expressions: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference</a>

---

##### `expressionsInput`<sup>Optional</sup> <a name="expressionsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.expressionsInput"></a>

```typescript
public readonly expressionsInput: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition">GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition</a>

---


### GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList <a name="GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.get"></a>

```typescript
public get(index: number): GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.details">details</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetails">GoogleDataLossPreventionDiscoveryConfigErrorsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.details"></a>

```typescript
public readonly details: StringMapList;
```

- *Type:* cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigErrorsDetails;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetails">GoogleDataLossPreventionDiscoveryConfigErrorsDetails</a>

---


### GoogleDataLossPreventionDiscoveryConfigErrorsList <a name="GoogleDataLossPreventionDiscoveryConfigErrorsList" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.get"></a>

```typescript
public get(index: number): GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.property.details">details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList">GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrors">GoogleDataLossPreventionDiscoveryConfigErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.property.details"></a>

```typescript
public readonly details: GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList">GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList</a>

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigErrors;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigErrors">GoogleDataLossPreventionDiscoveryConfigErrors</a>

---


### GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.resetFolderId">resetFolderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.resetOrganizationId">resetOrganizationId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFolderId` <a name="resetFolderId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.resetFolderId"></a>

```typescript
public resetFolderId(): void
```

##### `resetOrganizationId` <a name="resetOrganizationId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.resetOrganizationId"></a>

```typescript
public resetOrganizationId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.folderIdInput">folderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.organizationIdInput">organizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.folderId">folderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation">GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `folderIdInput`<sup>Optional</sup> <a name="folderIdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.folderIdInput"></a>

```typescript
public readonly folderIdInput: string;
```

- *Type:* string

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.organizationIdInput"></a>

```typescript
public readonly organizationIdInput: string;
```

- *Type:* string

---

##### `folderId`<sup>Required</sup> <a name="folderId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.folderId"></a>

```typescript
public readonly folderId: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation">GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation</a>

---


### GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocation` <a name="putLocation" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.putLocation"></a>

```typescript
public putLocation(value: GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation">GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation</a>

---

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.location">location</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference">GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.locationInput">locationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation">GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfig">GoogleDataLossPreventionDiscoveryConfigOrgConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.location"></a>

```typescript
public readonly location: GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference">GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation">GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation</a>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigOrgConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigOrgConfig">GoogleDataLossPreventionDiscoveryConfigOrgConfig</a>

---


### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.putSchemaModifiedCadence">putSchemaModifiedCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.putTableModifiedCadence">putTableModifiedCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.resetSchemaModifiedCadence">resetSchemaModifiedCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.resetTableModifiedCadence">resetTableModifiedCadence</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchemaModifiedCadence` <a name="putSchemaModifiedCadence" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.putSchemaModifiedCadence"></a>

```typescript
public putSchemaModifiedCadence(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.putSchemaModifiedCadence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence</a>

---

##### `putTableModifiedCadence` <a name="putTableModifiedCadence" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.putTableModifiedCadence"></a>

```typescript
public putTableModifiedCadence(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.putTableModifiedCadence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence</a>

---

##### `resetSchemaModifiedCadence` <a name="resetSchemaModifiedCadence" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.resetSchemaModifiedCadence"></a>

```typescript
public resetSchemaModifiedCadence(): void
```

##### `resetTableModifiedCadence` <a name="resetTableModifiedCadence" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.resetTableModifiedCadence"></a>

```typescript
public resetTableModifiedCadence(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.schemaModifiedCadence">schemaModifiedCadence</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.tableModifiedCadence">tableModifiedCadence</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.schemaModifiedCadenceInput">schemaModifiedCadenceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.tableModifiedCadenceInput">tableModifiedCadenceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaModifiedCadence`<sup>Required</sup> <a name="schemaModifiedCadence" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.schemaModifiedCadence"></a>

```typescript
public readonly schemaModifiedCadence: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference</a>

---

##### `tableModifiedCadence`<sup>Required</sup> <a name="tableModifiedCadence" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.tableModifiedCadence"></a>

```typescript
public readonly tableModifiedCadence: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference</a>

---

##### `schemaModifiedCadenceInput`<sup>Optional</sup> <a name="schemaModifiedCadenceInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.schemaModifiedCadenceInput"></a>

```typescript
public readonly schemaModifiedCadenceInput: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence</a>

---

##### `tableModifiedCadenceInput`<sup>Optional</sup> <a name="tableModifiedCadenceInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.tableModifiedCadenceInput"></a>

```typescript
public readonly tableModifiedCadenceInput: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence</a>

---


### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.resetTypes">resetTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetTypes` <a name="resetTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.resetTypes"></a>

```typescript
public resetTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.typesInput">typesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.types">types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.typesInput"></a>

```typescript
public readonly typesInput: string[];
```

- *Type:* string[]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence</a>

---


### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.resetTypes">resetTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetTypes` <a name="resetTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.resetTypes"></a>

```typescript
public resetTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.typesInput">typesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.types">types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.typesInput"></a>

```typescript
public readonly typesInput: string[];
```

- *Type:* string[]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence</a>

---


### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.resetMinAge">resetMinAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.resetMinRowCount">resetMinRowCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinAge` <a name="resetMinAge" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.resetMinAge"></a>

```typescript
public resetMinAge(): void
```

##### `resetMinRowCount` <a name="resetMinRowCount" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.resetMinRowCount"></a>

```typescript
public resetMinRowCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.minAgeInput">minAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.minRowCountInput">minRowCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.minAge">minAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.minRowCount">minRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minAgeInput`<sup>Optional</sup> <a name="minAgeInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.minAgeInput"></a>

```typescript
public readonly minAgeInput: string;
```

- *Type:* string

---

##### `minRowCountInput`<sup>Optional</sup> <a name="minRowCountInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.minRowCountInput"></a>

```typescript
public readonly minRowCountInput: number;
```

- *Type:* number

---

##### `minAge`<sup>Required</sup> <a name="minAge" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.minAge"></a>

```typescript
public readonly minAge: string;
```

- *Type:* string

---

##### `minRowCount`<sup>Required</sup> <a name="minRowCount" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.minRowCount"></a>

```typescript
public readonly minRowCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions</a>

---


### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.putOrConditions">putOrConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.putTypes">putTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resetCreatedAfter">resetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resetOrConditions">resetOrConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resetTypeCollection">resetTypeCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resetTypes">resetTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOrConditions` <a name="putOrConditions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.putOrConditions"></a>

```typescript
public putOrConditions(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.putOrConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions</a>

---

##### `putTypes` <a name="putTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.putTypes"></a>

```typescript
public putTypes(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.putTypes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes</a>

---

##### `resetCreatedAfter` <a name="resetCreatedAfter" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resetCreatedAfter"></a>

```typescript
public resetCreatedAfter(): void
```

##### `resetOrConditions` <a name="resetOrConditions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resetOrConditions"></a>

```typescript
public resetOrConditions(): void
```

##### `resetTypeCollection` <a name="resetTypeCollection" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resetTypeCollection"></a>

```typescript
public resetTypeCollection(): void
```

##### `resetTypes` <a name="resetTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.resetTypes"></a>

```typescript
public resetTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.orConditions">orConditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.types">types</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.createdAfterInput">createdAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.orConditionsInput">orConditionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.typeCollectionInput">typeCollectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.typesInput">typesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.createdAfter">createdAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.typeCollection">typeCollection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `orConditions`<sup>Required</sup> <a name="orConditions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.orConditions"></a>

```typescript
public readonly orConditions: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference</a>

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.types"></a>

```typescript
public readonly types: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference</a>

---

##### `createdAfterInput`<sup>Optional</sup> <a name="createdAfterInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.createdAfterInput"></a>

```typescript
public readonly createdAfterInput: string;
```

- *Type:* string

---

##### `orConditionsInput`<sup>Optional</sup> <a name="orConditionsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.orConditionsInput"></a>

```typescript
public readonly orConditionsInput: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions</a>

---

##### `typeCollectionInput`<sup>Optional</sup> <a name="typeCollectionInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.typeCollectionInput"></a>

```typescript
public readonly typeCollectionInput: string;
```

- *Type:* string

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.typesInput"></a>

```typescript
public readonly typesInput: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes</a>

---

##### `createdAfter`<sup>Required</sup> <a name="createdAfter" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.createdAfter"></a>

```typescript
public readonly createdAfter: string;
```

- *Type:* string

---

##### `typeCollection`<sup>Required</sup> <a name="typeCollection" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.typeCollection"></a>

```typescript
public readonly typeCollection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions</a>

---


### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.resetTypes">resetTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTypes` <a name="resetTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.resetTypes"></a>

```typescript
public resetTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.typesInput">typesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.types">types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.typesInput"></a>

```typescript
public readonly typesInput: string[];
```

- *Type:* string[]

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes</a>

---


### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled</a>

---


### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables</a>

---


### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.putOtherTables">putOtherTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.putTables">putTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.resetOtherTables">resetOtherTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.resetTables">resetTables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOtherTables` <a name="putOtherTables" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.putOtherTables"></a>

```typescript
public putOtherTables(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.putOtherTables.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables</a>

---

##### `putTables` <a name="putTables" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.putTables"></a>

```typescript
public putTables(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.putTables.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables</a>

---

##### `resetOtherTables` <a name="resetOtherTables" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.resetOtherTables"></a>

```typescript
public resetOtherTables(): void
```

##### `resetTables` <a name="resetTables" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.resetTables"></a>

```typescript
public resetTables(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.otherTables">otherTables</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.tables">tables</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.otherTablesInput">otherTablesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.tablesInput">tablesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `otherTables`<sup>Required</sup> <a name="otherTables" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.otherTables"></a>

```typescript
public readonly otherTables: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference</a>

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.tables"></a>

```typescript
public readonly tables: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference</a>

---

##### `otherTablesInput`<sup>Optional</sup> <a name="otherTablesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.otherTablesInput"></a>

```typescript
public readonly otherTablesInput: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables</a>

---

##### `tablesInput`<sup>Optional</sup> <a name="tablesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.tablesInput"></a>

```typescript
public readonly tablesInput: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter</a>

---


### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.putPatterns">putPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.resetPatterns">resetPatterns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPatterns` <a name="putPatterns" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.putPatterns"></a>

```typescript
public putPatterns(value: IResolvable | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.putPatterns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns</a>[]

---

##### `resetPatterns` <a name="resetPatterns" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.resetPatterns"></a>

```typescript
public resetPatterns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.patterns">patterns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.patternsInput">patternsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `patterns`<sup>Required</sup> <a name="patterns" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.patterns"></a>

```typescript
public readonly patterns: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList</a>

---

##### `patternsInput`<sup>Optional</sup> <a name="patternsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.patternsInput"></a>

```typescript
public readonly patternsInput: IResolvable | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes</a>

---


### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.get"></a>

```typescript
public get(index: number): GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns</a>[]

---


### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.resetDatasetIdRegex">resetDatasetIdRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.resetProjectIdRegex">resetProjectIdRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.resetTableIdRegex">resetTableIdRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetIdRegex` <a name="resetDatasetIdRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.resetDatasetIdRegex"></a>

```typescript
public resetDatasetIdRegex(): void
```

##### `resetProjectIdRegex` <a name="resetProjectIdRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.resetProjectIdRegex"></a>

```typescript
public resetProjectIdRegex(): void
```

##### `resetTableIdRegex` <a name="resetTableIdRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.resetTableIdRegex"></a>

```typescript
public resetTableIdRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.datasetIdRegexInput">datasetIdRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.projectIdRegexInput">projectIdRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.tableIdRegexInput">tableIdRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.datasetIdRegex">datasetIdRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.projectIdRegex">projectIdRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.tableIdRegex">tableIdRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdRegexInput`<sup>Optional</sup> <a name="datasetIdRegexInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.datasetIdRegexInput"></a>

```typescript
public readonly datasetIdRegexInput: string;
```

- *Type:* string

---

##### `projectIdRegexInput`<sup>Optional</sup> <a name="projectIdRegexInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.projectIdRegexInput"></a>

```typescript
public readonly projectIdRegexInput: string;
```

- *Type:* string

---

##### `tableIdRegexInput`<sup>Optional</sup> <a name="tableIdRegexInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.tableIdRegexInput"></a>

```typescript
public readonly tableIdRegexInput: string;
```

- *Type:* string

---

##### `datasetIdRegex`<sup>Required</sup> <a name="datasetIdRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.datasetIdRegex"></a>

```typescript
public readonly datasetIdRegex: string;
```

- *Type:* string

---

##### `projectIdRegex`<sup>Required</sup> <a name="projectIdRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.projectIdRegex"></a>

```typescript
public readonly projectIdRegex: string;
```

- *Type:* string

---

##### `tableIdRegex`<sup>Required</sup> <a name="tableIdRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.tableIdRegex"></a>

```typescript
public readonly tableIdRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns</a>

---


### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.putIncludeRegexes">putIncludeRegexes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.resetIncludeRegexes">resetIncludeRegexes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIncludeRegexes` <a name="putIncludeRegexes" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.putIncludeRegexes"></a>

```typescript
public putIncludeRegexes(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.putIncludeRegexes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes</a>

---

##### `resetIncludeRegexes` <a name="resetIncludeRegexes" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.resetIncludeRegexes"></a>

```typescript
public resetIncludeRegexes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.includeRegexes">includeRegexes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.includeRegexesInput">includeRegexesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeRegexes`<sup>Required</sup> <a name="includeRegexes" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.includeRegexes"></a>

```typescript
public readonly includeRegexes: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference</a>

---

##### `includeRegexesInput`<sup>Optional</sup> <a name="includeRegexesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.includeRegexesInput"></a>

```typescript
public readonly includeRegexesInput: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables</a>

---


### GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putCadence">putCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putDisabled">putDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resetCadence">resetCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCadence` <a name="putCadence" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putCadence"></a>

```typescript
public putCadence(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putCadence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence</a>

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putConditions"></a>

```typescript
public putConditions(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions</a>

---

##### `putDisabled` <a name="putDisabled" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putDisabled"></a>

```typescript
public putDisabled(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putDisabled.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled</a>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putFilter"></a>

```typescript
public putFilter(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter</a>

---

##### `resetCadence` <a name="resetCadence" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resetCadence"></a>

```typescript
public resetCadence(): void
```

##### `resetConditions` <a name="resetConditions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.cadence">cadence</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.disabled">disabled</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.cadenceInput">cadenceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.conditionsInput">conditionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.disabledInput">disabledInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cadence`<sup>Required</sup> <a name="cadence" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.cadence"></a>

```typescript
public readonly cadence: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.conditions"></a>

```typescript
public readonly conditions: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.disabled"></a>

```typescript
public readonly disabled: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.filter"></a>

```typescript
public readonly filter: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference</a>

---

##### `cadenceInput`<sup>Optional</sup> <a name="cadenceInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.cadenceInput"></a>

```typescript
public readonly cadenceInput: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget</a>

---


### GoogleDataLossPreventionDiscoveryConfigTargetsList <a name="GoogleDataLossPreventionDiscoveryConfigTargetsList" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.get"></a>

```typescript
public get(index: number): GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargets">GoogleDataLossPreventionDiscoveryConfigTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLossPreventionDiscoveryConfigTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargets">GoogleDataLossPreventionDiscoveryConfigTargets</a>[]

---


### GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.putBigQueryTarget">putBigQueryTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.resetBigQueryTarget">resetBigQueryTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBigQueryTarget` <a name="putBigQueryTarget" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.putBigQueryTarget"></a>

```typescript
public putBigQueryTarget(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.putBigQueryTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget</a>

---

##### `resetBigQueryTarget` <a name="resetBigQueryTarget" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.resetBigQueryTarget"></a>

```typescript
public resetBigQueryTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.property.bigQueryTarget">bigQueryTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.property.bigQueryTargetInput">bigQueryTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargets">GoogleDataLossPreventionDiscoveryConfigTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bigQueryTarget`<sup>Required</sup> <a name="bigQueryTarget" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.property.bigQueryTarget"></a>

```typescript
public readonly bigQueryTarget: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference</a>

---

##### `bigQueryTargetInput`<sup>Optional</sup> <a name="bigQueryTargetInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.property.bigQueryTargetInput"></a>

```typescript
public readonly bigQueryTargetInput: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget">GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLossPreventionDiscoveryConfigTargets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTargets">GoogleDataLossPreventionDiscoveryConfigTargets</a>

---


### GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference <a name="GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionDiscoveryConfig } from '@cdktf/provider-google-beta'

new googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeouts">GoogleDataLossPreventionDiscoveryConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLossPreventionDiscoveryConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionDiscoveryConfig.GoogleDataLossPreventionDiscoveryConfigTimeouts">GoogleDataLossPreventionDiscoveryConfigTimeouts</a>

---



